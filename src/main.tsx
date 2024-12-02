import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home.tsx";
import Eposides from "./src/pages/Episodes.tsx";
import DetailCharacter from "./src/pages/DetailCharacter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="character/:id" element={<DetailCharacter />} />
          <Route path="episodes" element={<Eposides />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
