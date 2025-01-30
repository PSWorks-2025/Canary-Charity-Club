import cover from "/images/cover_1.jpg";
import wave from "/images/wave.svg";
import { ScrollList, ScrollListItem } from "../components/list/ScrollList.jsx";

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
    imageUrl: cover,
  },
  event_2: {
    title: "Tên sự kiện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam. Corporis laboriosam architecto necessitatibus officiis consequatur obcaecati, reprehenderit animi perspiciatis cupiditate.",
    href: "#",
    imageUrl: cover,
  },
};

const stories = {
  story_0: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: cover,
  },
  story_1: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: cover,
  },
  story_2: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: cover,
  },
  story_3: {
    title: "Tên câu chuyện",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas possimus quis nihil unde eum. Magnam harum eligendi itaque veniam.",
    href: "#",
    imageUrl: cover,
  },
};

function HomePage() {
  return (
    <div className="w-full">
      <div
        className="w-full h-178 bg-cover bg-center"
        style={{ backgroundImage: `url("${cover}")` }}
      ></div>
      <div className="w-full h-64 -mt-20 flex justify-center">
        {Object.entries(stats)
          .map(([key, stat]) => [key.slice(5), stat])
          .sort((a, b) => a[0] - b[0])
          .map(([key, stat]) => (
            <div
              key={`stat_${key}`}
              className="w-64 h-full bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat"
              style={{ backgroundImage: `url("${wave}")` }}
            >
              <div className="w-full font-medium text-xl py-10 text-center">
                {stat.title}
              </div>
              <div className="w-full font-bold text-6xl text-secondary text-center">
                {stat.data}
              </div>
            </div>
          ))}
      </div>
      <div className="w-full">
        <div className="w-full pt-20 pb-4 font-bold text-[2.5rem] text-primary-title text-center">
          Sự kiện đang diễn ra
        </div>
        <div className="w-full">
          {Object.entries(events)
            .map(([key, event]) => [key.slice(6), event])
            .sort((a, b) => a[0] - b[0])
            .map(([key, event]) => (
              <div key={`event_${key}`} className="w-full py-4 flex">
                <div className="w-1/2 px-4">
                  <div
                    className="w-136 h-84 bg-cover bg-center float-right rounded-lg"
                    style={{ backgroundImage: `url("${event.imageUrl}")` }}
                  ></div>
                </div>
                <div className="w-1/2 px-4">
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
        <div className="w-full pt-20 pb-8 font-bold text-[2.5rem] text-primary-title text-center">
          Các câu chuyện ý nghĩa
        </div>
        <div className="w-full flex justify-center">
          <ScrollList>
            {Object.entries(stories)
              .map(([key, story]) => [key.slice(6), story])
              .sort((a, b) => a[0] - b[0])
              .map(([key, story]) => (
                <ScrollListItem
                  key={`story_${key}`}
                  href={story.href}
                  imageUrl={story.imageUrl}
                  title={story.title}
                  description={story.description}
                />
              ))}
          </ScrollList>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
