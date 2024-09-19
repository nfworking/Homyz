import HeroSection from "../src/components/4/HeroSection"
import Navbar from "../src/components/4/Navbar"
import Footer from "../src/components/4/Footer"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <Footer/>
    </div>
  )
}

export default App