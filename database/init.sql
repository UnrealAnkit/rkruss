-- Drop existing policies if they exist
drop policy if exists "Public profiles are viewable by everyone" on profiles;
drop policy if exists "Users can insert their own profile" on profiles;
drop policy if exists "Users can update own profile" on profiles;

-- Create a table for public profiles
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  username text,
  full_name text,
  avatar_url text,
  website text,
  
  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
exception
  when others then
    return new; -- Ensure user is created even if profile insert fails
end;
$$;

-- Drop trigger if exists
drop trigger if exists on_auth_user_created on auth.users;

-- Create trigger for new user creation
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user(); 