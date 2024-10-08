import HeroSection from "../src/components/1/HeroSection"
import Navbar from "../src/components/1/Navbar"
import ProductPage from "../src/components/1/HousePage"
import ContactSection from "../src/components/ContactSection"
import Footer from "../src/components/Footer"
import BlurBackground from "../src/components/BlurBackground"






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
