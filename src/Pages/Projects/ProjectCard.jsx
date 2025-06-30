import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`${project.cardColor} border border-white/10 hover:${project.accent} transition-all duration-300 rounded-3xl overflow-hidden shadow-lg backdrop-blur-xl`}
  >
    <div className="p-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10"
      />
      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap items-center gap-3 mb-4 text-white/80 text-xl">
        {project.tech.map((icon, idx) => (
          <div
            key={idx}
            className="p-2 bg-white/10 rounded-lg border border-white/10"
          >
            {icon}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 bg-white/10 border border-white/10 text-white rounded-lg hover:bg-white/20 transition"
        >
          <FaGithub className="inline-block mr-2" /> Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-white rounded-lg hover:bg-blue-500/30 transition"
        >
          <FaExternalLinkAlt className="inline-block mr-2" /> Live
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
