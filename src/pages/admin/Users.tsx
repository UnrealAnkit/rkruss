import React, { useState, useEffect } from 'react';
import { FiEdit2, FiTrash2, FiUserPlus, FiSearch, FiMoreVertical } from 'react-icons/fi';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { RealtimeChannel, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string | null;
  username: string | null;
  last_sign_in_at: string | null;
  provider: string | null;
}

const Users: React.FC = () => {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState<Profile[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalOnline, setTotalOnline] = useState(0);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
    trackPresence();

    // Set up real-time subscription for profiles
    const profilesSubscription = supabase
      .channel('public:profiles')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles'
        },
        (payload: RealtimePostgresChangesPayload<Profile>) => {
          console.log('Profile change received:', payload);
          fetchUsers(); // Refetch all users to ensure consistency
        }
      )
      .subscribe();

    return () => {
      console.log('Cleaning up subscriptions');
      profilesSubscription.unsubscribe();
    };
  }, []);

  const fetchUsers = async () => {
    try {
      setError(null);

      // Fetch profiles with all user data
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw profilesError;
      }

      if (!profiles) {
        setUsers([]);
        return;
      }

      console.log('Fetched profiles:', profiles);
      setUsers(profiles);
    } catch (err: any) {
      console.error('Error fetching users:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const trackPresence = async () => {
    try {
      const presenceChannel = supabase.channel('online-users');

      presenceChannel
        .on('presence', { event: 'sync' }, () => {
          const presenceState = presenceChannel.presenceState();
          const onlineUserIds = new Set(
            Object.values(presenceState)
              .flat()
              .map((presence: any) => presence.user_id)
          );
          setOnlineUsers(onlineUserIds);
          setTotalOnline(onlineUserIds.size);
        })
        .subscribe(async (status) => {
          if (status === 'SUBSCRIBED' && currentUser) {
            await presenceChannel.track({
              user_id: currentUser.id,
              online_at: new Date().toISOString(),
            });
          }
        });

      return () => {
        presenceChannel.unsubscribe();
      };
    } catch (error) {
      console.error('Error setting up presence:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      setLoading(true);
      
      // Delete the profile
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);

      if (profileError) throw profileError;

      // UI will be updated automatically by the real-time subscription
    } catch (err: any) {
      console.error('Error deleting user:', err);
      alert('Failed to delete user: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const MobileActionMenu = ({ user }: { user: Profile }) => (
    <div className="relative">
      <button 
        onClick={() => setSelectedUser(selectedUser === user.id ? null : user.id)}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <FiMoreVertical />
      </button>
      
      {selectedUser === user.id && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-1">
          <button
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            onClick={() => {/* TODO: Implement edit */}}
          >
            <FiEdit2 /> Edit User
          </button>
          <button
            className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 ${
              user.id === currentUser?.id
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-red-600 hover:bg-red-50'
            }`}
            onClick={() => {
              if (user.id !== currentUser?.id) {
                handleDeleteUser(user.id);
              }
              setSelectedUser(null);
            }}
            disabled={user.id === currentUser?.id}
          >
            <FiTrash2 /> Delete User
          </button>
        </div>
      )}
    </div>
  );

  if (loading) {
    return (
      <div className="p-4 sm:p-6">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading users: {error}</p>
          <button
            onClick={fetchUsers}
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">User Management</h1>
          <div className="text-gray-600 mt-1 flex flex-wrap items-center gap-2 sm:gap-3">
            <span>{users.length} total users</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              {totalOnline} online now
            </span>
          </div>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <FiUserPlus />
          <span>Add New User</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          {/* Desktop Table */}
          <table className="w-full hidden lg:table">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className={`inline-block w-2 h-2 rounded-full ${
                        onlineUsers.has(user.id) ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                      title={onlineUsers.has(user.id) ? 'Online' : 'Offline'}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.full_name || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.username || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.last_sign_in_at
                      ? new Date(user.last_sign_in_at).toLocaleString()
                      : 'Never'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-3">
                      <button 
                        className="text-blue-600 hover:text-blue-900 transition-colors"
                        onClick={() => {/* TODO: Implement edit */}}
                        title="Edit user"
                      >
                        <FiEdit2 />
                      </button>
                      <button 
                        className={`transition-colors ${
                          user.id === currentUser?.id
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-red-600 hover:text-red-900'
                        }`}
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={user.id === currentUser?.id}
                        title={
                          user.id === currentUser?.id
                            ? "You can't delete your own account"
                            : 'Delete user'
                        }
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile/Tablet List */}
          <div className="lg:hidden">
            {filteredUsers.map((user) => (
              <div key={user.id} className="border-b last:border-b-0">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span 
                        className={`inline-block w-2 h-2 rounded-full ${
                          onlineUsers.has(user.id) ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      />
                      <span className="font-medium">{user.email}</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      <div>{user.full_name || 'N/A'}</div>
                      <div className="mt-1">
                        Last login: {user.last_sign_in_at
                          ? new Date(user.last_sign_in_at).toLocaleString()
                          : 'Never'}
                      </div>
                    </div>
                  </div>
                  <MobileActionMenu user={user} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users; 