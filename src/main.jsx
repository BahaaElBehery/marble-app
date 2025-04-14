import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Catigories from "./components/Catigories.jsx";
import ViewMarble from "./components/ViewMarble.jsx";
import Collections from "./components/Collections.jsx";
import About_Us from "./components/About_Us.jsx";
import Contact_US from "./components/Contact_US.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/categories" element={<Catigories />} />
      <Route path="/categories/:viewmarble" element={<ViewMarble />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/about-us" element={<About_Us />} />
      <Route path="/contact-us" element={<Contact_US />} />
    </Routes>
  </BrowserRouter>
);
