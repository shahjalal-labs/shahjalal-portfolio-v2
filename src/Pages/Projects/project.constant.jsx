import flavorbook from "./ProjectsImage/flavorbook.png";
import eduverse from "./ProjectsImage/eduverse.png";
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
    title: "FlavorBook - Recipe Sharing & Recipe, Chefs, Product Marketplace.",
    description:
      "a full-featured and beautifully crafted web application designed to connect food lovers with chefs, ingredients, and delicious recipes. This platform allows users to browse, create, and manage recipes, explore blogs, book chefs, and even shop for ingredients—all in one place.",
    tech: [
      <FaReact />,
      <SiExpress />,
      <FaNodeJs />,
      <SiMongodb />,
      <SiTailwindcss />,
    ],
    github: "https://github.com/shahjalal-labs/flavor-book-client",
    live: "https://flavor-book.surge.sh/",
    image: flavorbook,
    cardColor: "bg-gradient-to-br from-cyan-700/20 to-cyan-900/20",
    accent: "border-cyan-500/30",
  },
  {
    id: 2,
    title: "EduVerse - Online Interactive Education Platform",
    description: "",
    tech: [<FaReact />, <SiExpress />, <FaNodeJs />, <SiMongodb />],
    github: "https://github.com/shahjalal-labs/eduverse-client",
    live: "https://edu-verse.surge.sh/",
    image: eduverse,
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
