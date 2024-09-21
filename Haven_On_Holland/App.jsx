import HeroSection from "../src/components/4/HeroSection"
import Navbar from "../src/components/4/Navbar"
import Footer from "../src/components/4/Footer"
import ContactSection from "../src/components/ContactSection"
import ProductPage from "../src/components/4/HousePage"



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