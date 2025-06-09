import { createClient } from '@supabase/supabase-js';

// Get these values from your Supabase project settings -> API
// Project URL: https://supabase.com/dashboard/project/_YOUR_PROJECT_ID_/settings/api
// Look for "Project URL" and "anon public" key
const supabaseUrl = 'https://bcakhycasvfsyfezdozg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjYWtoeWNhc3Zmc3lmZXpkb3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTI3MTIsImV4cCI6MjA2NTA2ODcxMn0.I2xsR2hDlrQVZ8Fo24CnMH5WeLxxEiKFLaaP28qV24U';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 