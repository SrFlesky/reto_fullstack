import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import { Home } from "./pages/home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>
);
