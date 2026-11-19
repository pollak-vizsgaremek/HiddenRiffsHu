import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

const MainPage = lazy(() => import("./pages/Főoldal.jsx"));
const MufajokPage = lazy(() => import("./pages/Műfajok.jsx"));
const BandakPage = lazy(() => import("./pages/Bandák.jsx"));
const AlbumokPage = lazy(() => import("./pages/Albumok.jsx"));
const ZenekPage = lazy(() => import("./pages/Zenék.jsx"));
const FelvetelPage = lazy(() => import("./pages/Zene_Felvétel.jsx"));
const RegisztracioPage = lazy(() => import("./pages/Regisztráció.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/regisztracio" element={<RegisztracioPage />} />
        <Route path="/felvetel" element={<FelvetelPage />} />
        <Route path="/mufajok" element={<MufajokPage />} />
        <Route path="/zenek" element={<ZenekPage />} />
        <Route path="/bandak" element={<BandakPage />} />
        <Route path="/albumok" element={<AlbumokPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
