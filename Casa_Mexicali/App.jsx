import HeroSection from "../src/components/1/HeroSection"
import Navbar from "../src/components/1/Navbar"
import Carousel from "../src/components/1/HousePage"



const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <Carousel/>
    </div>
  )
}

export default App