import { motion } from "framer-motion";
import { useLocation } from "react-router";
import AboutHeader from "./AboutHeader";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import ResumeSection from "./ResumeSection";

const About = () => {
  const isAboutPage = useLocation().pathname === "/about";

  return (
    <section
      id="about"
      className={`relative py-14 px-4 bg-gradient-to-br from-[#0b0c10] via-[#0f1115] to-[#1b1f24] text-white overflow-hidden min-h-screen ${
        isAboutPage ? "pt-36 min-h-screen" : ""
      }`}
    >
      {/* Floating nebula-like ambient effects */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-700/30 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[-10%] w-80 h-80 bg-pink-600/20 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[5%] left-[10%] w-56 h-56 bg-cyan-500/10 rounded-full blur-2xl z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <AboutHeader />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
      {/* {isAboutPage && <ResumeSection />} */}
      <ResumeSection />
    </section>
  );
};

export default About;
