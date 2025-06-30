import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

export const projects = [
  {
    id: 1,
    title: "DevConnect - Developer Social Network",
    description:
      "A full-stack social platform where developers can share posts, follow each other, and build a profile.",
    tech: [
      <FaReact />,
      <SiExpress />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiTailwindcss />,
    ],
    github: "https://github.com/yourname/devconnect",
    live: "https://devconnect.app",
    image: "/images/devconnect.png",
    cardColor: "bg-gradient-to-br from-cyan-700/20 to-cyan-900/20",
    accent: "border-cyan-500/30",
  },
  {
    id: 2,
    title: "TaskForge - Productivity SaaS",
    description:
      "A sleek task manager with user auth, priority tracking, and a drag-and-drop Kanban board.",
    tech: [<FaReact />, <SiExpress />, <FaNodeJs />, <SiMongodb />],
    github: "https://github.com/yourname/taskforge",
    live: "https://taskforge.io",
    image: "/images/taskforge.png",
    cardColor: "bg-gradient-to-br from-purple-700/20 to-purple-900/20",
    accent: "border-purple-500/30",
  },
  {
    id: 3,
    title: "CodeVerse - Online Code Editor",
    description:
      "A real-time collaborative code editor with syntax highlighting and terminal simulation.",
    tech: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    github: "https://github.com/yourname/codeverse",
    live: "https://codeverse.dev",
    image: "/images/codeverse.png",
    cardColor: "bg-gradient-to-br from-indigo-700/20 to-indigo-900/20",
    accent: "border-indigo-500/30",
  },
];
