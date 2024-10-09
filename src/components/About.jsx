import aboutjpg from "../assets/about-img.jpg"
import { ABOUT } from "../constants"
import {motion} from "framer-motion"

const About = () => {

  const projectVariants = {
    hidden: {
        opacity: 0, scale: 0.7, rotate: -40, y:50
    },
    visible: {
        opacity: 1,
        scale: 1, 
        rotate: 0,
        y: 0,
        transition: {
            duration: 4,
            ease: "easeOut",
            type: "spring",
            bounce: 0.4,
        }
    }
   }
  return (
    <section className="container mx-auto mt-20 mb-52" id="about">
        <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">About Us</h2>
        <div className="flex flex-wrap">
            <motion.div  initial="hidden"
        whileInView="visible"
        viewport={{ once: false}}
        variants={projectVariants} className="w-full p-4 lg:w-1/2">
            <img src={aboutjpg} alt="about" className=" rounded-3xl lg:-rotate-3"/>
            </motion.div>
            <div className="w-full px-2 lg:w-1/2">
             <h2 className="text-4xl tracking-tighter lg:text-6xl">
                {ABOUT.header}
             </h2>
             <div className="mb-8 mt-1 h-2 w-36 bg-yellow-500 lg:-rotate-3"></div>
             <p className="m-8 text-0.2rem leading-relaxed tracking-tight lg:max-w-xl">
                {ABOUT.content}
             </p>
            </div>
        </div>
    </section>
  )
}

export default About