import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/Home.tsx";
import DetailCharacter from "./src/pages/DetailCharacter.tsx";
import SelectedCharacter from "./src/pages/SelectedCharacter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="character/:id" element={<DetailCharacter />} />
          <Route path="selected-character" element={<SelectedCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
