import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import Subscriptions from './Subsription'
import PropertyViewHistory from './PropertyHistory'
import AccountInformation from './AccountInformation'
import UserDashboard from './something'

export default function LoginPage() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const handleLogin = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  if (isAuthenticated) {
    return (
      <UserDashboard />
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
       
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