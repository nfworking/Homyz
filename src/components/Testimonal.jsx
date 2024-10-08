import { motion } from "framer-motion"
import {TESTIMONIALS} from "../constants/index"

const Testimonal = () => {
    const chileVariants = {
        hidden: {opacity: 0, y:50},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.5,
            }
        })
    }
  return (
   <section className="px-6 py-10 min-h-screen " id="testimonals">
    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10"> What People Are Saying</h1>
    <div className="h-1 w-20 bg-white mb-8"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonal, index) => (
            <motion.div key={index} className="relative rounded-lg p-6 h-full backdrop-blur-3xl bg-stone-500/10" custom={index} initial="hidden" whileInView="visible" variants={chileVariants}>
                <div className="flex items-center mb-4"> 
                    <img src={testimonal.image} alt={testimonal.name} className="w-12 h-12 rounded-full mr-4" loading="lazy" />
                    <div>
                        <h2 className="text-lg font-semibold">{testimonal.name}</h2>
                        <p className="text-sm font-light">{testimonal.title}</p>

                    </div>
                 </div>
                <p className="leading-relaxed">{testimonal.feedback}</p>
        

            </motion.div>
        ))
        }
    </div>
   </section>
  )
}

export default Testimonal