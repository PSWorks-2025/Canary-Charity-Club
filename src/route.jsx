import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import Layout from "./layout.jsx";

import HomePage from "./app/page.jsx";
import AboutPage from "./app/about/page.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout page="home">
            <HomePage />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout page="about">
            <AboutPage />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);
