import LoginPage from "./login"
import { Auth0Provider } from '@auth0/auth0-react';







const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
<Auth0Provider
      domain="dev-2dfpa0wa7iini3i4.us.auth0.com"
      clientId="YNk9dVv6qv2KNjlXAz7Y75KDGgmtn0De"
      redirectUri={window.location.origin}
    >
       <LoginPage/>
      {/* Your app components */}
    </Auth0Provider>
    

    </div>
  )
}

export default App