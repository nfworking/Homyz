import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import Subscriptions from "./Subsription";
import PropertyViewHistory from "./PropertyHistory";
import AccountInformation from "./AccountInformation";
import UserDashboard from "./something";
import HeroSection from "./HeroSection";
import Navbar from "./1/Navbar";
import loginvid from "../assets/masthead-bg.mp4";
import Footer from "./1/Footer";
import ContactSection from "./ContactSection";
export default function LoginPage() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithRedirect();
  };

  if (isAuthenticated) {
    return <UserDashboard />;
  }

  return(
    <div className="min-h-screen flex relative items-center justify-center ">
      <Navbar />

      <div className=" z-10 p-8 rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold mb-6 text-center text-white">
          Login
        </h1>

        <div className="mt-4 text-center">
          <button
            onClick={() => loginWithRedirect()}
            className="mt-10 text-3xl text-white/300 hover:text-blue-500 bg-black border-2 border-blue-400 px-8 py-8 rounded-lg hover:bg-blue-400 hover:border-blue-500 hover:text-white transition duration-300 ease-in-out hover:scale-105"
          >
            Sign in with Auth0
          </button>
        </div>
      </div>
      <div className=" relative absolute">
          <video
            src={loginvid}
            className="h-full w-full object-cover md:brightness-100"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>
     
    </div>
      
  )
  
}

LoginPage.propTypes = {
  loginWithRedirect: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  logout: PropTypes.func,
};
