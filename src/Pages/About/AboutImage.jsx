import { motion } from "framer-motion";
import { profile } from "../../assets";

const AboutImage = () => (
  <motion.div
    initial={{ opacity: 1, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex justify-center relative rounded-full"
  >
    <div className="relative group">
      <img
        src={profile}
        alt="Md. Shahjalal"
        className="rounded-full w-full max-w-md object-cover shadow-2xl border-4 border-white/10 group-hover:border-blue-500/30 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      <div className="absolute -inset-4 border-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-full" />
    </div>
  </motion.div>
);

export default AboutImage;
