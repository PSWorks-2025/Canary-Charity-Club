import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./global.css";

import Layout from "./layout.jsx";

import HomePage from "./app/page.jsx";
import AboutPage from "./app/about/page.jsx";
import EachStoryPage from "./app/EachStoryPage.jsx";
import FundraisingPage from "./app/FundraisingPage.jsx";

const mockData = {
  campaignTitle: "Ủng hộ Trường Học Vùng Cao",
  campaignDescription:
    "Chúng tôi đang gây quỹ để xây dựng trường học cho trẻ em vùng cao.",
  imageUrl: "https://picsum.photos/800/400",
  fundraiserName: "Quỹ Vì Tương Lai",
  amountRaised: 50000000,
  goalAmount: 100000000,
  qrCodeUrl: "https://picsum.photos/500",
  donors: [
    { name: "Nguyễn Văn A", amount: 1000000 },
    { name: "Trần Thị B", amount: 2000000 },
  ],
  transactions: [
    { id: "TXN001", recipient: "Nhóm Từ Thiện X", amount: 5000000 },
    { id: "TXN002", recipient: "Nhóm Từ Thiện Y", amount: 3000000 },
  ],
};

const mockStory = {
  storyName: "The Adventure of Code",
  sections: [
    {
      title: "Chapter 1: The Beginning",
      content:
        "Once upon a time, in a digital realm, a young coder embarked on an adventure...",
    },
    {
      title: "Chapter 2: The Challenge",
      content:
        "The coder faced a bug so mysterious, even Stack Overflow had no answers...",
    },
    {
      title: "Chapter 3: The Resolution",
      content:
        "With perseverance and the help of AI, the coder finally fixed the bug!",
    },
  ],
  images: [
    {
      src: "https://picsum.photos/400",
      alt: "A person coding",
      caption: "Coding the future",
    },
    {
      src: "https://picsum.photos/400",
      alt: "Bug fixing",
      caption: "Debugging in progress",
    },
    {
      src: "https://picsum.photos/400",
      alt: "Celebration",
      caption: "Bug fixed, mission accomplished!",
    },
  ],
};

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
