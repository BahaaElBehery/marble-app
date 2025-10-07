// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Catigories from "./components/pages/Catigories.jsx";
// import ViewMarble from "./components/ViewMarble.jsx";
// import Collections from "./components/pages/Collections.jsx";
// import About_Us from "./components/pages/About_Us.jsx";
// import Contact_US from "./components/pages/Contact_US.jsx";
// import Home from "./components/pages/Home.jsx";
// import ProtectedView from "./components/productedview/ProtectedView.jsx"; // ✅ استورد المكون
// import "./i18n"; // مهم جدًا

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <ProtectedView watermarkText="© El Behery Marble">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/categories" element={<Catigories />} />
//         <Route path="/categories/:viewmarble" element={<ViewMarble />} />
//         <Route path="/collections" element={<Collections />} />
//         <Route path="/about-us" element={<About_Us />} />
//         <Route path="/contact-us" element={<Contact_US />} />
//       </Routes>
//     </ProtectedView>
//   </BrowserRouter>
// );

import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Catigories from "./components/pages/Catigories.jsx";
import ViewMarble from "./components/ViewMarble.jsx";
import Collections from "./components/pages/Collections.jsx";
import About_Us from "./components/pages/About_Us.jsx";
import Contact_US from "./components/pages/Contact_US.jsx";
import Home from "./components/pages/Home.jsx";
import ProtectedView from "./components/productedview/ProtectedView.jsx";
import Layout from "./components/Layout.jsx"; // ✅ استيراد layout
import "./i18n";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProtectedView watermarkText="© El Behery Marble">
      <Routes>
        {/* ✅ كل الصفحات دي هتتحط جوه الـ Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Catigories />} />
          <Route path="categories/:viewmarble" element={<ViewMarble />} />
          <Route path="collections" element={<Collections />} />
          <Route path="about-us" element={<About_Us />} />
          <Route path="contact-us" element={<Contact_US />} />
        </Route>
      </Routes>
    </ProtectedView>
  </BrowserRouter>
);
