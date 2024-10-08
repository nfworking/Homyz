import video from "../../assets/6.mp4";
import hero from "../../assets/thumbnail.png";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className="relatie flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover md:brightness-75"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute -z-10">
        <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
            <h1 className="text-center justify-center text-9xl uppercase">Main River Magic</h1>
              <p className="p-8 tracking-tighter text-lg text-white "></p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

