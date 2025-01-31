import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import Layout from "./layout.jsx";

import HomePage from "./app/page.jsx";
import AboutPage from "./app/about/page.jsx";
import EachStoryPage from "./app/EachStoryPage.jsx";
import FundraisingPage from "./app/FundraisingPage.jsx";

import { mockData, mockStory } from "./MockData/page56MockData.js";

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
        path="/eachStory"
        element={
          <Layout>
            <EachStoryPage
              storyName={mockStory.storyName}
              sections={mockStory.sections}
              images={mockStory.images}
            />
          </Layout>
        }
      />
      <Route
        path="/donate"
        element={
          <Layout>
            <FundraisingPage {...mockData} />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>,
);
