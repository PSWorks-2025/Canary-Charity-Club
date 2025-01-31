import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import Layout from "./layout.jsx";

import HomePage from "./app/page.jsx";
import AboutPage from "./app/about/page.jsx";
import Events from "./app/events/page.jsx";
import Story from "./app/story/page.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />

      <Route
        path="/events"
        element={
          <Layout>
            <Events />
          </Layout>
        }
      />

      <Route
        path="/story"
        element={
          <Layout>
            <Story />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>
);
