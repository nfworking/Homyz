import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Dishes from "./components/Dishes"
import About from "./components/About"
import Mission from "./components/Mission"

import Review from "./components/Review"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <Dishes/>
      <About/>
      <Mission/>
     
      <Review/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App