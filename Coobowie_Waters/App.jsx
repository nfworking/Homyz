import HeroSection from "../src/components/2/HeroSection"
import Navbar from "../src/components/2/Navbar"
import Footer from "../src/components/2/Footer"
import ContactSection from "../src/components/ContactSection"
import HousesSection from "../src/components/2/HousePage"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <HousesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App