// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import { highlights } from "./about.constant";
//
// const AboutContent = () => (
//   <motion.div
//     initial={{ opacity: 0, x: 80 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     transition={{ duration: 1, ease: "easeOut" }}
//     viewport={{ once: true }}
//     className="space-y-10"
//   >
//     <div className="space-y-6 max-w-3xl">
//       <h3 className="text-3xl md:text-4xl font-extrabold text-white">
//         I'm{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-violet-500 font-kaushan">
//           Md. Shahjalal
//         </span>
//       </h3>
//
//       {/* New standalone Typewriter line */}
//       <div className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 min-h-[2.5rem]">
//         <Typewriter
//           words={[
//             "Frontend Engineer",
//             "MERN Expert",
//             "React Artisan",
//             "JavaScript Enthusiast",
//           ]}
//           loop
//           cursor
//           cursorStyle="|"
//           typeSpeed={70}
//           deleteSpeed={50}
//           delaySpeed={2000}
//         />
//       </div>
//
//       <p className="text-lg text-gray-300 leading-relaxed">
//         A purpose-driven developer dedicated to building seamless, performant,
//         and beautiful digital experiences.
//       </p>
//
//       <div className="space-y-5">
//         {highlights.map(({ icon, text, bg }, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.02 }}
//             transition={{ duration: 0.3 }}
//             className="flex items-start gap-4 group"
//           >
//             <div
//               className={`p-3 rounded-full transition-all duration-300 ${bg} group-hover:scale-105`}
//             >
//               {icon}
//             </div>
//             <p className="text-gray-300 leading-relaxed flex-1">{text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );
//
// export default AboutContent;
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { highlights } from "./about.constant";

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
    className="space-y-10"
  >
    <div className="space-y-2 max-w-3xl">
      <h3 className="text-3xl md:text-4xl font-extrabold text-white">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-tl from-blue-400 to-violet-500 font-kaushan">
          Md. Shahjalal
        </span>
      </h3>

      <div className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700 mb-2 min-h-[2.5rem]">
        <Typewriter
          words={[
            "Frontend Engineer",
            "MERN Expert",
            "React Artisan",
            "JavaScript Enthusiast",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </div>

      <p className="text-lg text-sky-700 leading-relaxed">
        A purpose-driven developer dedicated to building seamless, performant,
        and beautiful digital experiences.
      </p>

      <div className="space-y-5">
        {highlights.map(({ icon, text, bg }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4 group"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-full transition-all duration-300 ${bg} group-hover:scale-110`}
              >
                {icon}
              </div>
              <p className="text-sm md:text-base font-mono text-violet-300 bg-neutral-900/40 border border-neutral-700 px-4 py-3 rounded-lg shadow-md shadow-black/20 transition-all duration-300 group-hover:border-opacity-70 group-hover:shadow-cyan-500/20">
                {text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default AboutContent;
