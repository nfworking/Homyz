import missionImg from "../assets/mission.jpeg"
import herovideo from "../assets/masthead-bg.mp4"
import {MISSION} from "../constants/index"
import heropng from "../assets/hero.jpg"
import {motion} from "framer-motion"


const Mission = () => {


    const chileVariants = {
        hidden: {opacity: 0, y:200},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 4,
                delay: i * 0.5,
            }
        })
    }
  return (
    <section id="mission">
        <motion.div initial="hidden" whileInView="visible" variants={chileVariants} className="container mx-auto text-center">
            <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>
            <div className="relative flex items-center justify-center">
                <img src={heropng} height={50} className="w-full rounded-3xl brightness-75" >
                   
                </img>
                <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>
                <p className="absolute max-w-lg tracking-tighter lg:text-3xl">
                    {MISSION}
                </p>
            </div>
        </motion.div>
    </section>
  )
}

export default Mission
