import flavorbook from "./ProjectsImage/flavorbook.png";
import eduverse from "./ProjectsImage/eduverse.png";
import gontobbo from "./ProjectsImage/gontobbo.png";
import workelevate from "./ProjectsImage/workelevate.png";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
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
    description:
      "EduVerse is a MERN-based, fully authenticated, and interactive assignment submission platform designed for students and groups. With modern UI/UX, EduVerse enables students to collaborate, submit, and evaluate assignments seamlessly.",
    tech: [<FaReact />, <SiExpress />, <FaNodeJs />, <SiMongodb />],
    github: "https://github.com/shahjalal-labs/eduverse-client",
    live: "https://edu-verse.surge.sh/",
    image: eduverse,
    cardColor: "bg-gradient-to-br from-purple-700/20 to-purple-900/20",
    accent: "border-purple-500/30",
  },
  {
    id: 3,
    title:
      "WorkElevate – The Smart & Modern Job Portal for Job Seekers & Employers",
    description:
      "WorkElevate is your ultimate ultrasonic-powered platform, designed to connect talent with opportunity faster and smarter. It offers an intuitive, cutting-edge experience for job seekers and employers, bringing the future of hiring to Bangladesh today.",
    tech: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    github:
      "https://github.com/shahjalal-labs/WorkElebate/tree/main/client-WorkElebate",
    live: "https://workelevate.surge.sh",
    image: workelevate,
    cardColor: "bg-gradient-to-br from-indigo-700/20 to-indigo-900/20",
    accent: "border-indigo-500/30",
  },
  {
    id: 4,
    title:
      "Gontobbo - Nation wide smart, transparent parcel delivery. (Ongoing Project)",
    description:
      "Gontobbo isn’t just a digital tool — it’s a real-world logistics infrastructure, purpose-built to streamline and modernize parcel management across Bangladesh. It’s crafted not as a theoretical model, but as a practical, actionable, and deployable system that could serve thousands in real-time.",
    tech: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    github: "https://github.com/yourname/codeverse",
    live: "https://workelevate.surge.sh/",
    image: gontobbo,
    cardColor: "bg-gradient-to-br from-indigo-700/20 to-indigo-900/20",
    accent: "border-indigo-500/30",
  },
];
