import Success from "../src/components/Success"
import Navbar from "../src/components/1/Navbar"
import Footer from "../src/components/Footer"
import ContactSection from "../src/components/ContactSection"

const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <Success />
      <Navbar />
      <ContactSection/>
      <Footer />
    </div>
  )
}

export default App