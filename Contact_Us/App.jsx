import HeroSection from "../src/components/7/HeroSection"
import Navbar from "../src/components/1/Navbar"
import ContactForm from "../src/components/ContactForm"
import ContactSection from "../src/components/ContactSection"
import Footer from "../src/components/Footer"









const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
    
      <ContactSection/>
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default App