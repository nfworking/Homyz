import HeroSection from "../src/components/6/HeroSection"
import Navbar from "../src/components/6/Navbar"
import Footer from "../src/components/6/Footer"
import ProductPage from "../src/components/6/HousePage"
import ContactSection from "../src/components/ContactSection"


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