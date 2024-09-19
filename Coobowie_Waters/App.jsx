import HeroSection from "../src/components/2/HeroSection"
import Navbar from "../src/components/2/Navbar"
import Footer from "../src/components/2/Footer"


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