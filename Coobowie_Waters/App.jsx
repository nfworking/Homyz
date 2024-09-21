import ProductPage from "../src/components/2/HousePage"
import HeroSection from "../src/components/2/HeroSection"
import Footer from "../src/components/2/Footer"
import ContactSection from "../src/components/ContactSection"
import Navbar from "../src/components/2/Navbar"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar/>
    <ProductPage/>
    <ContactSection/>
    <Footer/>
    </div>
  )

}

export default App