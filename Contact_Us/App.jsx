import HeroSection from "../src/components/7/HeroSection"
import Navbar from "../src/components/1/Navbar"
import ContactForm from "../src/components/ContactForm"
import ContactSection from "../src/components/ContactSection"
import Footer from "../src/components/Footer"
import BlurBackground from "../src/components/BlurBackground"









const App = () => {
  return (
    <>
    <BlurBackground/>
   
    <div className="overflow-y-hidden text-neutral-200">
      
      <Navbar />
      <ContactForm/>
      <ContactSection/>
    
      <Footer/>

    </div>
    </>
  )
}

export default App