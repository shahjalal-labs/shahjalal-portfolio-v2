import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "./hero.constant";
import HeroResumeButton from "./HeroResumeButton";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }} // Repeats every time
      transition={{ duration: 0.8 }}
      className="space-y-8 flex-1 px-5 "
    >
      <HeroTitle />
      <HeroDescription />
      <div className="flex flex-wrap items-center gap-6 pt-6">
        <HeroResumeButton />
        <SocialLinks links={socialLinks} />
      </div>
    </motion.div>
  );
};

export default HeroRight;
