import HeroSection from "../src/components/3/HeroSection"
import Navbar from "../src/components/3/Navbar"
import Footer from "../src/components/3/Footer"
import ContactSection from "../src/components/ContactSection"



const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <Footer/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App