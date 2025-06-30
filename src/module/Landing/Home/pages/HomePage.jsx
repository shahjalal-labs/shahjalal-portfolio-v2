import About from "../../../../Pages/About/About";
import Contact from "../../../../Pages/Contact/Contact";
import Education from "../../../../Pages/Education/Education";
import Projects from "../../../../Pages/Projects/Projects";
import Skills from "../../../../Pages/skills/Skills";
import WorkFlow from "../../../../Pages/WorkFlow/Workflow";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Projects />
      <WorkFlow />
    </div>
  );
};

export default HomePage;
