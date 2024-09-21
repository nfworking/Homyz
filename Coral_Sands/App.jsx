import HeroSection from "../src/components/3/HeroSection"
import Navbar from "../src/components/3/Navbar"
import Footer from "../src/components/3/Footer"
import ContactSection from "../src/components/ContactSection"
import ProductPage from "../src/components/3/HousePage"



const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <HeroSection/>
      <Navbar />
      <ProductPage/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App