import HeroSection from "../src/components/5/HeroSection"
import Navbar from "../src/components/5/Navbar"
import Footer from "../src/components/5/Footer"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
    </div>
  )
}

export default App