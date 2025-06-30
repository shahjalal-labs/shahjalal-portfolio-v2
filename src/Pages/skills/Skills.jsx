import { motion } from "framer-motion";
import { updatedSkillCategories } from "./SkillCategories";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >
      {/* Animated orbs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-80 -left-80 w-[700px] h-[700px] bg-blue-500/10 rounded-full border border-blue-400/10 blur-2xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-80 -right-80 w-[700px] h-[700px] bg-purple-500/10 rounded-full border border-purple-400/10 blur-2xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Skill Matrix
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            My full-stack toolkit — optimized for building fast, scalable, and
            elegant systems across the web.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {updatedSkillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 border border-white/10 backdrop-blur-lg bg-gradient-to-br ${category.gradient} shadow-xl hover:shadow-[0_0_20px_#0ff] transition-all`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm text-white/90 hover:bg-white/10 transition-all"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-cyan-400">
            Additional Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-mono text-white">
            {[
              "ES6+",
              "REST APIs",
              "Responsive Design",
              "Vite",
              "Postman",
              "VS Code",
              "Debugging",
              "JWT",
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="px-3 py-1.5 bg-black border border-cyan-400/20 rounded-full hover:bg-cyan-500/10 hover:shadow-md hover:shadow-cyan-400/20 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
