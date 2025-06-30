import { motion } from "framer-motion";

const AboutHeader = () => (
  <motion.div
    initial={{ opacity: 1, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
        Who I Am...
      </span>
    </h2>
    <div className="w-28 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-full mx-auto" />
  </motion.div>
);

export default AboutHeader;
