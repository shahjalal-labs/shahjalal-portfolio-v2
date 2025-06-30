import { motion } from "framer-motion";
import {
  FaKeyboard,
  FaMousePointer,
  FaTerminal,
  FaCode,
  FaGlobe,
  FaRegCompass,
  FaFireAlt,
} from "react-icons/fa";
import { SiNeovim, SiZsh, SiLua, SiTmux, SiArchlinux } from "react-icons/si";
import { GiKeyboard, GiClick } from "react-icons/gi";

const workflowItems = [
  {
    title: "EndeavourOS + Hyprland",
    icon: <SiArchlinux className="text-blue-400 text-3xl animate-pulse" />,
    description:
      "Minimalist tiling window manager setup with Hyprland for extreme speed and aesthetics.",
  },
  {
    title: "Keyd + Tap Dancing",
    icon: <FaKeyboard className="text-green-400 text-3xl animate-bounce" />,
    description:
      "Fully remapped keyboard with tap dancing layers and mods for unparalleled efficiency.",
  },
  {
    title: "Neovim + Lua",
    icon: <SiNeovim className="text-teal-400 text-3xl animate-spin-slow" />,
    description:
      "Custom Lua-powered automation, fuzzy finder, LSP, telescope, snippets & AI-based assistance.",
  },
  {
    title: "Zsh + tmux",
    icon: <SiZsh className="text-purple-400 text-3xl animate-fade" />,
    description:
      "Highly modular terminal multiplexing and shell scripting. Lightning fast dev env with zsh, tmux, and powerline.",
  },
  {
    title: "Surfingkeys",
    icon: <FaGlobe className="text-yellow-400 text-3xl animate-pulse" />,
    description:
      "Complete browser navigation with keyboard-only control, CLI features, and Vim-style hints.",
  },
  {
    title: "wl-kbptr + hints",
    icon: <FaMousePointer className="text-pink-400 text-3xl animate-ping" />,
    description:
      "Zero mouse workflow using wl-kbptr and visual hints for GUI element control.",
  },
];

const WorkFlow = () => {
  return (
    <section
      id="workflow"
      className="relative py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden min-h-screen"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] bg-pink-500/10 border border-pink-500/10 rounded-full z-0"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-300px] left-[-300px] w-[600px] h-[600px] bg-blue-500/10 border border-blue-500/10 rounded-full z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Hardcore Keyboard Workflow
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mx-auto mb-16"
        >
          An elite-level hyper-optimized setup for devs who live in the terminal
          and dance on keys.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workflowItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-md hover:shadow-xl hover:border-pink-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 p-4 bg-white/10 rounded-xl inline-block">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
