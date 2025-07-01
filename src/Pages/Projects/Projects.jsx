import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./project.constant";

const Projects = () => (
  <section
    id="projects"
    className="relative py-28 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-blue-500/10 rounded-full border border-blue-500/10 z-0"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      className="absolute -left-64 -bottom-64 w-[700px] h-[700px] bg-purple-600/10 rounded-full border border-purple-500/10 z-0"
    />

    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Featured Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Real-world applications built using the MERN stack — tailored to solve
          problems, showcase skills, and push boundaries.
        </p>
      </motion.div>

      <div className="grid grid-cols-1   gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
