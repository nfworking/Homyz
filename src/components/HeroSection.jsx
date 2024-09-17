import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";
import hero from "../assets/hero.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relatie flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute -z-10">
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <motion.img initial={{ opacity: 0, y: 100}} animate={{ opacity: 1, y: 0}} transition={{ duration: 5}}  src={logo} className=" w-full p-4" alt="resturant"/>
            <p className="p-8 tracking-tighter text-lg text-white "></p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
