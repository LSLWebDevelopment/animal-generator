import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ImageContextProvider } from "./context/ImageContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </StrictMode>
);
