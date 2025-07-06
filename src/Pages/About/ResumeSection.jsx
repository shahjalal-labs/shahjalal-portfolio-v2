import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // or use custom buttons

const ResumeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mt-20 bg-[#0f1115]/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
    >
      <h2 className="text-3xl font-bold text-white mb-6">📄 Resume</h2>

      <div className="text-gray-300 space-y-4 text-sm leading-relaxed max-h-[400px] overflow-y-auto pr-2">
        <p>
          <strong className="text-white">Md. Shahjalal</strong>
          <br />
          Junior MERN Stack Developer
        </p>
        <p>📞 +8801540325659 | 📧 muhommodshahjalal@gmail.com</p>
        <p>📍 Gazipur, Dhaka, Bangladesh</p>
        <p>
          🔗{" "}
          <a
            href="https://github.com/shahjalal-labs"
            className="text-blue-400 underline"
          >
            GitHub
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/shahjalal-mern/"
            className="text-blue-400 underline ml-2"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="http://shahjalal-mern.surge.sh"
            className="text-blue-400 underline ml-2"
          >
            Portfolio
          </a>
        </p>

        <hr className="border-gray-700" />

        <p className="text-white font-semibold">🎯 Career Objective</p>
        <p>
          Aspiring MERN Stack Developer driven by the mission to solve
          real-world problems through open-source collaboration...
        </p>

        <p className="text-white font-semibold mt-4">🛠 Skills</p>
        <ul className="list-disc list-inside ml-4">
          <li>
            <strong>Frontend:</strong> React, React Router, Tailwind CSS,
            TanStack Query, Framer Motion
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Tools:</strong> Neovim, Tmux, Zsh, Git, Linux (Hyprland)
          </li>
        </ul>

        <p className="text-white font-semibold mt-4">📚 Training</p>
        <p>
          <strong>Full-Stack MERN Development:</strong> Trained in real-world
          apps, REST APIs, auth, deployment.
        </p>

        <p className="text-white font-semibold mt-4">🚀 Projects</p>
        <p>
          <strong>📘 FlavorBook:</strong> Recipe sharing, chef booking,
          blogging, ingredients market.{" "}
          <a
            href="https://flavor-book.surge.sh"
            className="text-blue-400 underline"
          >
            Live
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/shahjalal-labs/flavor-book-client"
            className="text-blue-400 underline"
          >
            GitHub
          </a>
        </p>

        <p>
          <strong>🎓 EduVerse:</strong> Assignment and study portal.{" "}
          <a
            href="https://edu-verse.surge.sh"
            className="text-blue-400 underline"
          >
            Live
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/shahjalal-labs/eduverse-client"
            className="text-blue-400 underline"
          >
            GitHub
          </a>
        </p>

        <p className="text-white font-semibold mt-4">🌐 Languages</p>
        <p>Bengali (Native), English (Fluent)</p>

        <p className="text-white font-semibold mt-4">🛠️ Personal Projects</p>
        <p>
          CLI-first Linux workflow with Neovim, Tmux, Zsh, and Hyprland.{" "}
          <a
            href="https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs"
            className="text-blue-400 underline"
          >
            Dotfiles Repo
          </a>
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <a
          href="/Shahjalal_Resume.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          ⬇️ Download PDF
        </a>
        <a
          href="/Shahjalal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white/20 hover:border-white text-white px-6 py-2 rounded-lg transition"
        >
          👁️ View PDF
        </a>
      </div>
    </motion.div>
  );
};

export default ResumeSection;
