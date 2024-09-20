import HeroSection from "../src/components/1/HeroSection"
import Navbar from "../src/components/1/Navbar"
import HouseDetails from "../src/components/1/House-details"
import Footer from "../src/components/1/Footer"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <HouseDetails/>
     
    </div>
  )
}

export default App