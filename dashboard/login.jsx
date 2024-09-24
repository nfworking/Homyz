import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import Subscriptions from './Subsription'
import PropertyViewHistory from './PropertyHistory'
import AccountInformation from './AccountInformation'


export default function LoginPage() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('subscriptions');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'subscriptions':
        return <Subscriptions />;
      case 'viewHistory':
        return <PropertyViewHistory />;
      case 'accountInfo':
        return <AccountInformation />;
      default:
        return null;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  if (isAuthenticated) {
    return (
      <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome, {user?.name}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <button
            onClick={() => setActiveTab('subscriptions')}
            style={{ backgroundColor: activeTab === 'subscriptions' ? '#333' : 'black', color: 'white', padding: '10px', marginRight: '10px', border: 'none', cursor: 'pointer' }}
          >
            Subscriptions
          </button>
          <button
            onClick={() => setActiveTab('viewHistory')}
            style={{ backgroundColor: activeTab === 'viewHistory' ? '#333' : 'black', color: 'white', padding: '10px', marginRight: '10px', border: 'none', cursor: 'pointer' }}
          >
            View History
          </button>
          <button
            onClick={() => setActiveTab('accountInfo')}
            style={{ backgroundColor: activeTab === 'accountInfo' ? '#333' : 'black', color: 'white', padding: '10px', marginRight: '10px', border: 'none', cursor: 'pointer' }}
          >
            Account Info
          </button>
          <button
            onClick={() => setActiveTab('likedProperties')}
            style={{ backgroundColor: activeTab === 'likedProperties' ? '#333' : 'black', color: 'white', padding: '10px', marginRight: '10px', border: 'none', cursor: 'pointer' }}
          >
            Liked Properties
          </button>
        </div>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          style={{ backgroundColor: 'red', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>
      <div>
        {renderTabContent()}
      </div>
    </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => loginWithRedirect()}
            className="text-sm text-blue-400 hover:text-blue-500"
          >
            Sign in with Auth0
          </button>
        </div>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
  loginWithRedirect: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  logout: PropTypes.func
}