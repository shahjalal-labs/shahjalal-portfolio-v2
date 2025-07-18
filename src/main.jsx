import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./Router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-roboto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
);
