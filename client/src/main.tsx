import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import WSApp from "./pages/WSApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WSApp />
  </StrictMode>
);
