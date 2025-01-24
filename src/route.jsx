import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layout.jsx";

import HomePage from "./app/page.jsx";
import SearchPage from "./app/search/page.jsx";


const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout child={<HomePage />} />} />
      <Route path="/search" element={<Layout child={<SearchPage />} />} />
    </Routes>
  </BrowserRouter>
);
