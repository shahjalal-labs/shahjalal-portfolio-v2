import { motion } from "framer-motion";
import { codeSnippet } from "./hero.constant";
import HeroCodeBlock from "./HeroCodeBlock";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="flex-1"
    >
      <motion.div whileHover={{ scale: 1.01 }}>
        <HeroCodeBlock codeSnippet={codeSnippet} />
      </motion.div>
    </motion.div>
  );
};

export default HeroLeft;
