import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import HomePage from "../module/Landing/Home/pages/HomePage";
import About from "../Pages/About/About";
import Skills from "../Pages/skills/Skills";
import Education from "../Pages/Education/Education";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import WorkFlow from "../Pages/WorkFlow/Workflow";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <div>Error occured!!</div>,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "skills",
        Component: Skills,
      },
      {
        path: "education",
        Component: Education,
      },
      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "workflow",
        Component: WorkFlow,
      },
    ],
  },
]);

export default router;
