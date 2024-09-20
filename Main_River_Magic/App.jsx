import HeroSection from "../src/components/5/HeroSection"
import Navbar from "../src/components/5/Navbar"
import Footer from "../src/components/5/Footer"
import ContactSection from "../src/components/ContactSection"



const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App