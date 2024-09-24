import LoginPage from "./login"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ContactSection from "../components/ContactSection"
import Downloads from "../src/components/Downloads"







const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <Navbar/>
<Downloads/>
<Footer/>
<ContactSection/>







    
    

    </div>
  )
}

export default App