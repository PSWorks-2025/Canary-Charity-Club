import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom'; // <-- use 'react-router-dom'
import './global.css';

import Layout from './layout';

import HomePage from './app/home';
import AboutPage from './app/about/page';
// import EachStoryPage from "./app/stories/each/page.jsx";
import FundraisingPage from './app/donate/page';
import Events from './app/events/page';
import Story from './app/stories/page';

import { mockData, mockStory } from './mock/page56MockData';

const root = document.getElementById('root');

createRoot(root).render(
  <HashRouter>
    <Routes>
      {/* Layout wraps all children routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="eachStory" element={<EachStoryPage {...mockStory} />} /> */}
        <Route path="donate" element={<FundraisingPage {...mockData} />} />
        <Route path="events" element={<Events />} />
        <Route path="stories" element={<Story />} />
      </Route>
    </Routes>
  </HashRouter>
);
