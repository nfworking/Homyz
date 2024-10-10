import LoginPage from "../src/components/testlogin"
import { Auth0Provider } from '@auth0/auth0-react';
import BlurBackground from "../src/components/BlurBackground"

const VITE_REDIRECT_URL = import.meta.env.VITE_REDIRECT_PUBLIC_URL;




const App = () => {
  return ( 

	  <>
	  <BlurBackground/>
    <div className="overflow-y-hidden text-neutral-200">
<Auth0Provider
      domain="dev-2dfpa0wa7iini3i4.us.auth0.com"
      clientId="YNk9dVv6qv2KNjlXAz7Y75KDGgmtn0De"
      redirectUri={VITE_REDIRECT_URL}
    >
       <LoginPage/>


      {/* Your app components */}
    </Auth0Provider>
   

    </div>
	  </>
  )
}

export default App
