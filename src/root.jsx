import { createRoot } from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom'; // <-- use 'react-router-dom'
import './global.css';

import Layout from './layout';

import HomePage from './app/home';
import AboutPage from './app/about/';
// import EachStoryPage from "./app/stories/each/";
import FundraisingPage from './app/donate/';
import Events from './app/events/';
import Story from './app/stories/';

const root = document.getElementById('root');

createRoot(root).render(
  <HashRouter>
    <Routes>
      {/* Layout wraps all children routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        {/* <Route path="eachStory" element={<EachStoryPage {...mockStory} />} /> */}
        <Route path="donate" element={<FundraisingPage />} />
        <Route path="events" element={<Events />} />
        <Route path="stories" element={<Story />} />
      </Route>
    </Routes>
  </HashRouter>
);
