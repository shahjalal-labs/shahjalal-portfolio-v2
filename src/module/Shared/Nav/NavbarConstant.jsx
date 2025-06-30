import {
  HiOutlineHome,
  HiOutlineChip,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineChatAlt2,
  HiOutlineUser,
  HiOutlineLightningBolt,
} from "react-icons/hi";

export const navbarItems = [
  { to: "/", icon: <HiOutlineHome className="w-5 h-5" />, text: "Home" },
  {
    to: "/skills",
    icon: <HiOutlineChip className="w-5 h-5" />,
    text: "Skills",
  },

  {
    to: "/projects",
    icon: <HiOutlineBriefcase className="w-5 h-5" />,
    text: "Projects",
  },
  {
    to: "/education",
    icon: <HiOutlineAcademicCap className="w-5 h-5" />,
    text: "Education",
  },
  {
    to: "/about",
    icon: <HiOutlineUser className="w-5 h-5" />,
    text: "About",
  },
  {
    to: "/workflow",
    icon: <HiOutlineLightningBolt className="w-5 h-5" />,
    text: "Workflow",
  },
  {
    to: "/contact",
    icon: <HiOutlineChatAlt2 className="w-5 h-5" />,
    text: "Contact",
  },
];
