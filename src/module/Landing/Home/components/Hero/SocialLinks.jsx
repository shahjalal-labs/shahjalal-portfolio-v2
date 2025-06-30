import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ICONS = { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook };

const SocialLinks = ({ links }) => (
  <div className="flex space-x-5">
    {links.map(({ icon, label, link }, i) => {
      const Icon = ICONS[icon];
      return (
        <Link
          key={i}
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 bg-gray-800/50 hover:bg-gray-700/70 rounded-full border  border-gray-700/50 transition-all duration-300 group"
        >
          <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
        </Link>
      );
    })}
  </div>
);

export default SocialLinks;
