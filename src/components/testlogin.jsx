import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { 
  User,
  Settings,
  CreditCard,
  Clock,
  LogOut,
  Mail,
  Lock,
  Bell,
  Save
} from 'lucide-react';

const SettingsSection = ({ title, children }) => (
  <div className="backdrop-blur-lg shadow rounded-lg p-6 mb-6">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default function UserSettings() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
  const [activeTab, setActiveTab] = useState('profile');


  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div className="min-h-screen flex relative items-center justify-center">
 

    <div className=" z-10 p-8 rounded-lg shadow-xl">
      <h1 className="text-6xl font-bold mb-6 text-center text-white">
        Login
      </h1>

      <div className="mt-4 text-center">
        <button
          onClick={() => loginWithRedirect()}
          className="mt-10 text-3xl text-white/300 hover:text-blue-500 backdrop-blur-lg border-2 border-blue-400 px-8 py-8 rounded-lg hover:bg-blue-400 hover:border-blue-500 hover:text-white transition duration-300 ease-in-out hover:scale-105"
        >
          Sign in to Continue
        </button>
      </div>
    </div>
   
   
  </div>;
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: Settings },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'history', label: 'History', icon: Clock },
  ];

  return (
    <div className="min-h-screen backdrop-blur-lg mt-52 mb-0">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-64 backdrop-blur-lg shadow rounded-lg p-6">
            <div className="flex flex-col items-center mb-6">
              <img src={user.picture} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-white">{user.email}</p>
            </div>
            <nav>
              <ul>
                {tabs.map((tab) => (
                  <li key={tab.id} className="mb-2">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center w-full px-4 py-2 rounded-lg ${
                        activeTab === tab.id ? 'bg-black text-blue-700' : 'hover:text-blue'
                      }`}
                    >
                      <tab.icon className="mr-2 h-5 w-5" />
                      {tab.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="flex items-center w-full px-4 py-2 rounded-lg text-red-600 hover:bg-red-100"
                  >
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1">
            {activeTab === 'profile' && (
              <SettingsSection title="Profile Settings">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                    <input type="text" id="name" name="name" defaultValue={user.name} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-white">Bio</label>
                    <textarea id="bio" name="bio" rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </button>
                </form>
              </SettingsSection>
            )}
            {activeTab === 'account' && (
              <SettingsSection title="Account Settings">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-white mr-2" />
                      <span>Email Notifications</span>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-white mr-2" />
                      <span>Two-Factor Authentication</span>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Bell className="h-5 w-5 text-white mr-2" />
                      <span>Push Notifications</span>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </SettingsSection>
            )}
            {activeTab === 'subscriptions' && (
              <SettingsSection title="Subscriptions">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 backdrop-blur-lg rounded-lg">
                    <div>
                      <h3 className="text-lg font-medium">Pro Plan</h3>
                      <p className="text-sm text-white">$9.99/month</p>
                    </div>
                    <button className="px-4 py-2 backdrop-blur-lg text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Upgrade
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 backdrop-blur-lg rounded-lg">
                    <div>
                      <h3 className="text-lg font-medium">Team Plan</h3>
                      <p className="text-sm text-white">$49.99/month</p>
                    </div>
                    <button className="px-4 py-2 backdrop-blur-lg text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Upgrade
                    </button>
                  </div>
                </div>
              </SettingsSection>
            )}
            {activeTab === 'history' && (
              <SettingsSection title="Account History">
                <div className="space-y-4">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                      <div>
                        <h3 className="text-lg font-medium">Action {index + 1}</h3>
                        <p className="text-sm text-white">Description of the action taken</p>
                      </div>
                      <span className="text-sm text-white">{new Date().toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              </SettingsSection>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}