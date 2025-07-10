import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mt-20 bg-[#0f1115]/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10 sm:mx-10  2xl:mx-48"
    >
      <h2 className="text-3xl font-bold text-white mb-6">📄 Resume</h2>

      <div className="text-gray-300 space-y-4 text-sm leading-relaxed pr-2">
        <p>
          <strong className="text-white text-lg">Md. Shahjalal</strong>
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

        <h3 className="text-white font-semibold mt-4">🎯 Career Objective</h3>
        <p>
          Aspiring MERN Stack Developer driven by the mission to solve
          real-world problems through open-source collaboration. Passionate
          about building tools that empower others without cost, inspired by the
          philosophy of hackable, community-driven systems like Arch and Nix.
        </p>

        <h3 className="text-white font-semibold mt-4">🛠 Skills</h3>
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
            <strong>Auth & Hosting:</strong> Firebase, JWT, Surge, Netlify
          </li>
          <li>
            <strong>Tools:</strong> Neovim, Tmux, Zsh, Git, Linux (Hyprland),
            Vite
          </li>
          <li>
            <strong>Soft Skills:</strong> Self-motivated, Open-source
            enthusiast, Minimalist workflow
          </li>
        </ul>

        <h3 className="text-white font-semibold mt-4">
          📚 Professional Training
        </h3>
        <p>
          <strong>Full-Stack MERN Development:</strong> Trained in building
          modern, scalable web applications using MongoDB, Express.js, React,
          and Node.js. Focused on real-world project architecture, REST APIs,
          authentication, and deployment.
        </p>

        <h3 className="text-white font-semibold mt-4">🚀 Projects</h3>

        <div>
          <p className="text-white font-medium">📘 FlavorBook</p>
          <p className="mb-1">
            A full-featured platform for recipe sharing, chef booking, blogging,
            and ingredient marketplace.
          </p>
          <p className="mb-1">
            🔗{" "}
            <a
              href="https://flavor-book.surge.sh"
              className="text-blue-400 underline"
            >
              Live Site
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/shahjalal-labs/flavor-book-client"
              className="text-blue-400 underline"
            >
              GitHub (Client)
            </a>
          </p>
          <ul className="list-disc list-inside ml-4 mb-3">
            <li>Explore chef profiles and book them via checkout flow</li>
            <li>Share and browse recipes with tags and categories</li>
            <li>Read food-related blogs with comments and likes</li>
            <li>Buy and sell recipe ingredients in a modern marketplace</li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium">🎓 EduVerse</p>
          <p className="mb-1">
            An online assignment and group study portal with collaborative
            features.
          </p>
          <p className="mb-1">
            🔗{" "}
            <a
              href="https://edu-verse.surge.sh"
              className="text-blue-400 underline"
            >
              Live Site
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/shahjalal-labs/eduverse-client"
              className="text-blue-400 underline"
            >
              GitHub (Client)
            </a>
          </p>
          <ul className="list-disc list-inside ml-4 mb-3">
            <li>Assignment creation and submission via Google Docs</li>
            <li>Peer-based evaluation with feedback and marking</li>
            <li>View submitted and evaluated assignments in dashboard</li>
            <li>JWT-based secure authentication and protected routing</li>
          </ul>
        </div>

        <h3 className="text-white font-semibold mt-4">🌐 Languages</h3>
        <p>
          Bengali — Native
          <br />
          English — Fluent
        </p>

        <h3 className="text-white font-semibold mt-4">
          🛠️ Technical Interests & Personal Projects
        </h3>
        <ul className="list-disc list-inside ml-4">
          <li>
            Created a <strong>CLI-first Linux dev workflow</strong> with
            Hyprland, Neovim, Tmux, SurfingKeys, and more.
          </li>
          <li>
            Engineered a <strong>dotfile-driven system</strong> with custom
            keybindings and terminal automation.
          </li>
          <li>
            🔗{" "}
            <a
              href="https://github.com/shahjalal-labs/allDotfilesBackupEndeavourOs"
              className="text-blue-400 underline"
            >
              Dotfiles Repository
            </a>
          </li>
        </ul>
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
          href="https://drive.google.com/file/d/1vK_JUTnxlgq00LtJlMJ6v11ltVu5WHCR/view?usp=sharing"
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
