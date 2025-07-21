import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroResumeButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group custom-btn"
  >
    <div className="absolute inset-0 bg-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex flex-row-reverse items-center gap-2 ">
      <HiDownload className="w-6 h-6 text-purple-800" />
      <Link
        to="https://drive.google.com/file/d/1HAkBOSth-W68Df8O0uZM7KfZx-9CQGd7/view?usp=sharing"
        className="text-lg font-semibold text-purple-950"
        target="_blank"
        rel="noreferrer noopener"
      >
        View Resume
      </Link>
    </div>
  </motion.button>
);

export default HeroResumeButton;
