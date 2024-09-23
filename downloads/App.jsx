
import Navbar from "../src/components/1/Navbar"
import Downloads from "../src/components/Downloads"
import ContactSection from "../src/components/ContactSection"
import Footer from "../src/components/Footer"









const App = () => {
  return (
    <div className="overflow-y-hidden text-neutral-200">

      <Navbar />
      <Downloads/>
      <ContactSection/>

      <Footer/>

    </div>
  )
}

export default App