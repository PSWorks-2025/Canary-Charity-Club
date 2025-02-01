import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import Layout from "./layout.jsx";

import HomePage from "./app/page.jsx";
import AboutPage from "./app/about/page.jsx";

import EachStoryPage from "./app/EachStoryPage.jsx";
import FundraisingPage from "./app/FundraisingPage.jsx";

import { mockData, mockStory } from "./MockData/page56MockData.js";

import Events from "./app/events/page.jsx";
import Story from "./app/stories/page.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <BrowserRouter basename="/Canary-Charity-Club">
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
      <Route
        path="/events"
        element={
          <Layout>
            <Events />
          </Layout>
        }
      />
      <Route
        path="/stories"
        element={
          <Layout>
            <Story />
          </Layout>
        }
      />
    </Routes>
  </BrowserRouter>,
);
