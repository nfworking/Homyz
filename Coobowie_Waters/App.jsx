import ProductPage from "../src/components/1/HousePage"
import HeroSection from "../src/components/2/HeroSection"
import Footer from "../src/components/1/Footer"
import ContactSection from "../src/components/ContactSection"


const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">

    <ProductPage/>
    <ContactSection/>
    <Footer/>
    </div>
  )

}

export default App