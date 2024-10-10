import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

import About from "./components/About"
import Mission from "./components/Mission"
import Testimonal from "./components/Testimonal"
import BlurBackground from "./components/BlurBackground"
import Projects from "./components/Projects"




import Review from "./components/Review"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"


const App = () => {
  return (
    <><BlurBackground /><div className="overflow-y-hidden text-neutral-200">
      <HeroSection />
      <Navbar />
     
      <About />
      <Mission />
<Projects/>
      <Review />
      <Testimonal />
      <ContactSection />
      <Footer />
    </div></>
  )
}

export default App
