import cover from "/images/cover_1.jpg";
import wave from "/images/wave.svg";
import canary1 from "/images/canary1.jpg"
import canary2 from "/images/canary2.jpg";
import canary3 from "/images/canary3.jpg";
import canary4 from "/images/canary4.jpg";
import canary5 from "/images/canary5.jpg";
import canary6 from "/images/canary6.jpg";
import canary7 from "/images/canary7.jpg";
import canary8 from "/images/canary8.jpg";
import canary9 from "/images/canary9.jpg";
import canary10 from "/images/canary10.jpg";
import canary11 from "/images/canary11.jpg";
import canary12 from "/images/canary12.jpg";
import canary13 from "/images/canary13.jpg";
import canary14 from "/images/canary14.jpg";
import canary15 from "/images/canary15.jpg";
import canary16 from "/images/canary16.jpg";
import canary17 from "/images/canary17.jpg";
import canary18 from "/images/canary18.jpg";
import canary19 from "/images/canary19.jpg";
import {
  ScrollStoryList,
  ScrollStoryListItem,
} from "../components/Lists/ScrollStoryList.jsx";

const stats = {
  stat_0: {
    title: "Số sự kiện",
    data: "+99",
  },
  stat_1: {
    title: "Số người đã giúp đỡ",
    data: ">999",
  },
  stat_2: {
    title: "Số tiền quyên góp",
    data: ">1tỷ",
  },
  stat_3: {
    title: "Số dự án đã làm",
    data: "+199",
  },
};

const events = {
  event_0: {
    title: "Tên sự kiện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam. Corporis laboriosam architecto necessitatibus officiis consequatur obcaecati, reprehenderit animi perspiciatis cupiditate.",
    href: "#",
    imageUrl: cover,
  },
  event_1: {
    title: "Tên sự kiện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam. Corporis laboriosam architecto necessitatibus officiis consequatur obcaecati, reprehenderit animi perspiciatis cupiditate.",
    href: "#",
    imageUrl: canary1,
  },
  event_2: {
    title: "Tên sự kiện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam. Corporis laboriosam architecto necessitatibus officiis consequatur obcaecati, reprehenderit animi perspiciatis cupiditate.",
    href: "#",
    imageUrl: canary2,
  },
};

const stories = {
  story_0: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: canary3,
  },
  story_1: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: canary4,
  },
  story_2: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: canary5,
  },
  story_3: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: canary6,
  },
};

function HomePage() {
  return (
    <div className="w-full">
      <div
        className="w-full h-178 bg-cover bg-center"
        style={{
          backgroundImage: `url("${cover}")`,
          height: "calc(100vh - 5rem)",
        }}
      ></div>
      <div className="w-full h-full md:h-64 md:-mt-20 flex flex-col md:flex-row justify-center items-center">
        {Object.entries(stats)
          .map(([key, stat]) => [key.slice(5), stat])
          .sort((a, b) => a[0] - b[0])
          .map(([key, stat]) => (
            <div
              key={`stat_${key}`}
              className="w-64 h-full md:mt-0 mt-10 bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat"
              style={{ backgroundImage: `url("${wave}")` }}
            >
              <div className="w-full font-medium text-sm md:text-xl py-3 md:py-10 text-center">
                {stat.title}
              </div>
              <div className="w-full font-bold text-2xl md:text-6xl text-secondary text-center">
                {stat.data}
              </div>
            </div>
          ))}
      </div>
      <div className="w-full">
        <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
          Sự kiện đang diễn ra
        </div>
        <div className="w-full">
          {Object.entries(events)
            .map(([key, event]) => [key.slice(6), event])
            .sort((a, b) => a[0] - b[0])
            .map(([key, event]) => (
              <div key={`event_${key}`} className="w-full h-84 mt-12 flex">
                <div className="w-1/2 h-full px-4">
                  <div
                    className="w-136 h-full bg-cover bg-center float-right rounded-lg"
                    style={{ backgroundImage: `url("${event.imageUrl}")` }}
                  ></div>
                </div>
                <div className="w-1/2 h-full px-4">
                  <div className="font-bold text-2xl text-primary-title">
                    {event.title}
                  </div>
                  <p className="w-136 text-base/5 py-6 text-primary-paragraph">
                    {event.description}
                  </p>
                  <button
                    onClick={() => {
                      window.location.href = event.href;
                    }}
                    className="py-2 px-5 rounded-full cursor-pointer font-semibold bg-secondary text-secondary-title"
                  >
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div>
        <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
          Các câu chuyện ý nghĩa
        </div>
        <ScrollStoryList>
          {Object.entries(stories)
            .map(([key, story]) => [key.slice(6), story])
            .sort((a, b) => a[0] - b[0])
            .map(([key, story]) => (
              <ScrollStoryListItem
                key={`story_${key}`}
                href={story.href}
                imageUrl={story.imageUrl}
                title={story.title}
                description={story.description}
              />
            ))}
        </ScrollStoryList>
      </div>
    </div>
  );
}

export default HomePage;
