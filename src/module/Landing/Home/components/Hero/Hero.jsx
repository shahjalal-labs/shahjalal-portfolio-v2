import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

import { floatAnimation } from "../../../../../animation/framermotion.constant";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    Prism.highlightAll();
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden bg-black  ">
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-3xl z-0"
      />
      <motion.div
        animate={floatAnimation}
        className="absolute top-1/4 left-1/4 w-36 h-36 bg-blue-600/30 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ ...floatAnimation, y: [0, -20, 0] }}
        className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-purple-600/30 rounded-full blur-3xl z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-16  lg:items-center ">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
};

export default Hero;
