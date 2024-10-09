import { useState } from "react";
import logo from "../assets/logo.png";
import {LINKS} from "../constants"
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


    const [isHovered, setIsHovered] = useState(false)

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
        <a href="/">SHORLINE</a>
        <div className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <a key={index} href={link.targetId} className={`text-sm ${index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""} hover:opacity-50`} onClick={(e) => handleScroll(e, link.targetId)}>
                    {link.text}
                </a>
               
            ))}
        </div>
        <a href="/Contact_Us/" className="rounded-full bg-neutral-300/20 px-3 py-1 text-sm hover:opacity-50">Contact Us</a>
        <a href="/listings/" className="rounded-full bg-neutral-300/20 px-3 py-1 text-sm hover:opacity-50">Properties</a>
       <a href="https://github.com/nfworking/Shoreline-Client/raw/refs/heads/main/Shoreline-Installer.exe?download=true" className="rounded-full bg-neutral-300/20 px-3 py-1 text-sm hover:opacity-50">Download App</a>
        <div className="p-4 flex items-center justify-center ">
      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={` inset-0 flex absolute hover:text-white -z-10 rounded-full ${isHovered ? 'animate-border' : ''}`}>   </div>
        <a href="/dashboard/" className="rounded-full bg-neutral-300/20 py-1 px-3 text-white text-sm  cursor-grab">View your dashboard</a>
        </div>
   
      <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes/> : <FaBars/>} 
            </button>
       
        <style jsx>{`
        @keyframes border-animation {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-border {
          background: linear-gradient(
            60deg,
            #f79533,
            #f37055,
            #ef4e7b,
            #a166ab,
            #5073b8,
            #1098ad,
            #07b39b,
            #6fba82
          );
          background-size: 300% 300%;
          animation: border-animation 4s ease infinite;
        }
      `}</style>
       </div>
      </div>
      </div>

      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg lg:hidden">
            {LINKS.map((link, index) => (
                <a key={index} href={`#${link.targetId}`} className="block p-4 uppercase tracking-tighter" onClick={(e) => handleScroll (e, link.targetId)}>{link.text}</a>
            ))}
        </div>
        
      )}
    </nav>
    
  );
};

export default Navbar;
