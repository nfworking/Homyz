import Decline from "../src/components/Decline"
import Navbar from "../src/components/1/Navbar"
import Footer from "../src/components/Footer"
import ContactSection from "../src/components/ContactSection"

const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">
      <Decline />
      <Navbar />
      <ContactSection/>
      <Footer />
    </div>
  )
}

export default App