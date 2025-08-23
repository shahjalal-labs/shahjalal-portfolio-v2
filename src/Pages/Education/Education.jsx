import { motion } from "framer-motion";
import {
  FaSchool,
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
  FaAtom,
  FaFlask,
  FaMicroscope,
  FaReact,
  FaBrain,
  FaServer,
  FaCodeBranch,
  FaDatabase,
} from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";

const educationData = [
  {
    id: 1,
    degree: "Secondary School Certificate (SSC)",
    institution: "Kamarjuri Yousuf Ali High School",
    period: "2019 - 2021",
    icon: <FaSchool className="text-blue-400 text-3xl" />,
    achievements: [
      { icon: <FaAtom className="text-red-400" />, text: "Physics" },
      {
        icon: <PiMathOperationsBold className="text-purple-400" />,
        text: "Math",
      },
      { icon: <FaFlask className="text-yellow-400" />, text: "Chemistry" },
      { icon: <FaMicroscope className="text-green-400" />, text: "Biology" },
    ],
    cardColor: "bg-gradient-to-br from-blue-600/20 to-blue-800/20",
    accentColor: "border-blue-500/30",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bhawal Badre Alom Govt College",
    period: "2021 - 2023",
    icon: <FaGraduationCap className="text-green-400 text-3xl" />,
    achievements: [
      { icon: <FaAtom className="text-red-400" />, text: "Physics" },
      {
        icon: <PiMathOperationsBold className="text-purple-400" />,
        text: "Math",
      },
      { icon: <FaFlask className="text-yellow-400" />, text: "Chemistry" },
      { icon: <FaMicroscope className="text-green-400" />, text: "Biology" },
    ],
    cardColor: "bg-gradient-to-br from-green-600/20 to-green-800/20",
    accentColor: "border-green-500/30",
  },
  {
    id: 3,
    degree: "BSc in Mathematics (1st Year Running)",
    institution: "National University",
    period: "2024 - Present",
    icon: <FaBrain className="text-purple-400 text-3xl" />,
    achievements: [
      {
        icon: <FaAtom className="text-red-400" />,
        text: "Analytical Thinking & Abstract Problem Solving",
      },
      {
        icon: <PiMathOperationsBold className="text-purple-400" />,
        text: "Advanced Calculus, Algebra",
      },
    ],
    cardColor: "bg-gradient-to-br from-purple-600/20 to-purple-800/20",
    accentColor: "border-purple-500/30",
  },
  {
    id: 4,
    degree: "Hands-on MERN Stack Experience",
    institution: "Self-Taught | Project-Based Learning",
    period: "Ongoing",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
    achievements: [
      {
        icon: <FaReact className="text-blue-400" />,
        text: "React for building responsive UIs",
      },
      {
        icon: <FaServer className="text-green-400" />,
        text: "Express.js APIs with Node.js",
      },
      {
        icon: <FaDatabase className="text-yellow-500" />,
        text: "MongoDB schema design and CRUD ops",
      },
      {
        icon: <FaCodeBranch className="text-pink-400" />,
        text: "Git-based CI/CD workflow",
      },
    ],
    cardColor: "bg-gradient-to-br from-cyan-600/20 to-cyan-800/20",
    accentColor: "border-cyan-500/30",
  },
];

const EducationCard = ({ edu, index }) => (
  <motion.div
    initial={{ opacity: 1, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`${edu.cardColor} rounded-3xl overflow-hidden border border-white/10 hover:${edu.accentColor} transition-all duration-300 shadow-xl hover:shadow-${edu.accentColor}/40`}
  >
    <div className="p-8">
      <div className="flex items-start gap-6 mb-6">
        <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
          {edu.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
          <p className="text-blue-300 font-medium">{edu.institution}</p>
          <div className="mt-2 px-3 py-1 bg-white/10 rounded-full text-sm inline-block">
            {edu.period}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-0.5 bg-blue-500 rounded-full"></div>
          <h4 className="text-lg font-semibold text-white">
            Focus & Highlights
          </h4>
          <div className="flex-1 h-0.5 bg-white/10 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {edu.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="flex items-start gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
            >
              <div className="p-2 bg-white/10 rounded-lg">
                {achievement.icon}
              </div>
              <p className="text-gray-300">{achievement.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-64 -top-64 w-[600px] h-[600px] bg-blue-600/10 rounded-full border border-blue-500/10 z-0"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -left-64 -bottom-64 w-[700px] h-[700px] bg-purple-600/10 rounded-full border border-purple-500/10 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              My Academic Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            From core sciences to applied technology — a path shaped by
            curiosity, hands-on creation, and real-world coding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
