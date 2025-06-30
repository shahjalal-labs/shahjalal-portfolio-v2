import { Typewriter } from "react-simple-typewriter";
import { developerProfile, typewriterTitles } from "./hero.constant";

const HeroTitle = () => (
  <div className="space-y-4">
    <h1 className="text-4xl md:text-5xl font-bold text-purple-300 leading-tight">
      <span className="text-3xl text-cyan-600">🌙 Assalamualaikum,</span> <br />{" "}
      I'm{" "}
      <span className="text-blue-400 font-kaushan">
        {developerProfile.name}
      </span>
    </h1>
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-700 rounded-full" />
      <h2 className="text-xl font-medium text-cyan-700">
        <Typewriter
          words={typewriterTitles}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>
    </div>
  </div>
);

export default HeroTitle;
