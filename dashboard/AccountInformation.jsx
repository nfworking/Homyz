import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function AccountInformation() {
  const { user, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="bg-black text-white p-6 min-h-screen flex items-center justify-center">
        <div className="text-2xl">Loading user information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black text-white p-6 min-h-screen flex items-center justify-center">
        <div className="text-2xl text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-700">Account Information</h2>
      {user && (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            {user.picture && (
              <img src={user.picture} alt="Profile" className="w-24 h-24 rounded-full" />
            )}
            <div>
              <h3 className="text-2xl font-semibold">{user.name}</h3>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">User ID</h4>
              <p className="text-gray-400">{user.sub}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Email Verified</h4>
              <p className={user.email_verified ? "text-green-500" : "text-red-500"}>
                {user.email_verified ? "Yes" : "No"}
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Last Update</h4>
              <p className="text-gray-400">{new Date(user.updated_at).toLocaleDateString()}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Account Created</h4>
              <p className="text-gray-400">{new Date(user.created_at).toLocaleDateString()}</p>
            </div>
          </div>
          {user.locale && (
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Locale</h4>
              <p className="text-gray-400">{user.locale}</p>
            </div>
          )}
          {user.nickname && (
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Nickname</h4>
              <p className="text-gray-400">{user.nickname}</p>
            </div>
          )}
        </div>
      )}
      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out">
          Edit Profile
        </button>
      </div>
    </div>
  );
}