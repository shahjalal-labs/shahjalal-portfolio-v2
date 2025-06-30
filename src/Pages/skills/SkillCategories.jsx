// import {
//   FaCss3Alt,
//   FaGitAlt,
//   FaGithub,
//   FaHtml5,
//   FaNodeJs,
//   FaReact,
//   FaStripe,
// } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiJavascript,
//   SiMongodb,
//   SiExpress,
//   SiFramer,
//   SiJsonwebtokens,
//   SiNetlify,
//   SiVercel,
//   SiReactrouter,
//   SiAxios,
//   SiFirebase,
// } from "react-icons/si";
//
// export const skillCategories = [
//   {
//     title: "Frontend Development",
//     icon: <FaReact className="text-blue-400" />,
//     skills: [
//       { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
//       { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
//       {
//         name: "Tailwind CSS",
//         icon: <SiTailwindcss className="text-cyan-400" />,
//       },
//       {
//         name: "JavaScript",
//         icon: <SiJavascript className="text-yellow-400" />,
//       },
//       { name: "React.js", icon: <FaReact className="text-blue-400" /> },
//       {
//         name: "React Router",
//         icon: <SiReactrouter className="text-red-400" />,
//       },
//       { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
//       { name: "Axios/TanStack", icon: <SiAxios className="text-blue-300" /> },
//     ],
//     gradient: "from-blue-600/20 to-blue-800/20",
//   },
//   {
//     title: "Backend & Database",
//     icon: <FaNodeJs className="text-green-400" />,
//     skills: [
//       { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//       { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//       { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//       { name: "JWT", icon: <SiJsonwebtokens className="text-rose-400" /> },
//       { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//     ],
//     gradient: "from-green-600/20 to-green-800/20",
//   },
//   {
//     title: "Tools & Platforms",
//     icon: <FaGitAlt className="text-red-400" />,
//     skills: [
//       { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
//       { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
//       { name: "Stripe", icon: <FaStripe className="text-indigo-400" /> },
//       { name: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
//       { name: "Vercel", icon: <SiVercel className="text-white" /> },
//     ],
//     gradient: "from-purple-600/20 to-purple-800/20",
//   },
// ];

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaStripe,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiAxios,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiReactrouter,
} from "react-icons/si";

export const updatedSkillCategories = [
  {
    title: "UI Mastery",
    icon: <FaReact className="text-cyan-400" />,
    skills: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-300" />,
      },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-rose-400" />,
      },
    ],
    gradient: "from-cyan-700/20 to-cyan-900/20",
  },
  {
    title: "Server Logic",
    icon: <FaNodeJs className="text-green-400" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-300" /> },
    ],
    gradient: "from-green-600/20 to-green-800/20",
  },
  {
    title: "Ops & Deployment",
    icon: <FaGitAlt className="text-red-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Stripe", icon: <FaStripe className="text-indigo-400" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
    gradient: "from-purple-600/20 to-purple-800/20",
  },
];
