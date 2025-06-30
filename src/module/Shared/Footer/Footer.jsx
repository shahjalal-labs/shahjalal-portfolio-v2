import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from "react-icons/fa";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/shahjalal-labs",
      icon: (
        <FaGithub className="text-xl text-white group-hover:text-blue-400" />
      ),
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/shahjalal",
      icon: (
        <FaLinkedin className="text-xl text-white group-hover:text-blue-400" />
      ),
      label: "LinkedIn",
    },
    {
      href: "mailto:muhommodshahjalal@gmail.com",
      icon: (
        <FaEnvelope className="text-xl text-white group-hover:text-blue-400" />
      ),
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 py-12 px-6 text-white overflow-hidden z-10">
      {/* Glow Orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full bg-purple-600/10 border border-purple-500/10"
      />
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute bottom-[-180px] left-[-180px] w-[360px] h-[360px] rounded-full bg-blue-600/10 border border-blue-500/10"
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Terminal Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-white bg-white/10 border border-white/10 rounded-full backdrop-blur-md"
        >
          <FaTerminal className="text-green-400 animate-pulse" />
          <span className="font-mono text-green-300">
            ~$ Crafted in Tiling Precision
          </span>
        </motion.div>

        {/* Signature */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Built With NeoVim, Hyprland, Wl-Kbptr & Soul
        </motion.h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-sm max-w-2xl mx-auto font-mono">
          Automation meets aesthetics — from key-level remaps to cursorless
          control, this entire interface is a canvas of terminal-driven energy.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="group transition-all duration-300 hover:text-blue-400"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to Top */}
        <motion.div
          whileHover={{ y: -4 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#top"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-blue-500/30 transition-all"
          >
            Back to Top{" "}
            <BsArrowUpRightCircle className="text-blue-400 text-lg" />
          </a>
        </motion.div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-gray-600 font-mono tracking-wide">
          &copy; {new Date().getFullYear()} Shahjalal-Mern. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
