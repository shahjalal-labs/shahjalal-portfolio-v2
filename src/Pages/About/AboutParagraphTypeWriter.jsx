import { Typewriter } from "react-simple-typewriter";

const AboutParagraphTypeWriter = () => {
  return (
    <div>
      <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
        A purpose-driven{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
        </span>{" "}
        dedicated to building seamless, performant, and beautiful digital
        experiences.
      </p>
    </div>
  );
};

export default AboutParagraphTypeWriter;
