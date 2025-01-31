import cover from "/images/cover_2.jpg";
import {
  ScrollStoryList,
  ScrollStoryListItem,
} from "../../components/Lists/ScrollStoryList.jsx";
import {
  ScrollMemberList,
  ScrollMemberListItem,
} from "../../components/Lists/ScrollMemberList.jsx";
import {
  ActivityHistoryList,
  ActivityHistoryListItem,
} from "../../components/Lists/ActivityHistoryList.jsx";
import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";

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

const members = {
  member_0: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
  member_1: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
  member_2: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
  member_3: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
  member_4: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
  member_5: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
  member_6: {
    name: "Tên",
    role: "Chức vụ",
    imageUrl: cover,
  },
};

const activityHistory = {
  activity_0: {
    startDate: "6/2017",
    endDate: "8/2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, saepe eveniet atque veniam quas voluptates aliquam iure, accusamus aliquid autem, commodi soluta vitae cumque exercitationem voluptatum. Adipisci necessitatibus accusantium eum.",
    imageUrl1: cover,
    imageUrl2: cover,
  },
  activity_1: {
    startDate: "6/2017",
    endDate: "8/2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, saepe eveniet atque veniam quas voluptates aliquam iure, accusamus aliquid autem, commodi soluta vitae cumque exercitationem voluptatum. Adipisci necessitatibus accusantium eum.",
    imageUrl1: cover,
    imageUrl2: cover,
  },
  activity_2: {
    startDate: "6/2017",
    endDate: "8/2018",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, saepe eveniet atque veniam quas voluptates aliquam iure, accusamus aliquid autem, commodi soluta vitae cumque exercitationem voluptatum. Adipisci necessitatibus accusantium eum.",
    imageUrl1: cover,
    imageUrl2: cover,
  },
};

function Aboutpage() {
  return (
    <div className="w-full">
      <div
        className="w-full bg-cover bg-bottom flex justify-center items-end bg-blend-multipy"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8)), url("${cover}")`,
          height: "calc(100vh - 5rem)",
        }}
      >
        <div className="w-280">
          <div className="text-[2.5rem] font-semibold text-secondary-title">
            Tên nội dung
          </div>
          <p className="text-secondary-title mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            sed nihil voluptates et minus nulla doloremque architecto qui hic
            expedita nesciunt quis incidunt deleniti animi, possimus provident
            alias voluptatum nemo.
          </p>
        </div>
      </div>
      <div className="w-full pt-20 flex">
        <div className="w-1/2 px-4">
          <div
            className="w-162 h-102 -mr-26 bg-cover bg-center float-right rounded-lg"
            style={{ backgroundImage: `url("${cover}")` }}
          ></div>
        </div>
        <div className="w-1/2 px-4 flex items-center">
          <div className="w-136 h-62 rounded-lg bg-tag-2 text-primary-title shadow-[1.5rem_-1.5rem_#E6EBFB]">
            <div className="w-full font-bold text-[2.5rem] pt-12 text-center">
              Sứ mệnh
            </div>
            <p className="w-full px-8 text-base/5 font-medium py-2 text-primary-paragraph text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              quod reprehenderit voluptatum veniam, dolore amet, voluptatibus
              eius, error temporibus quo accusamus expedita explicabo dolorum
              voluptates provident asperiores quas quae voluptatem.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pt-20 flex flex-row-reverse">
        <div className="w-1/2 px-4">
          <div
            className="w-162 h-102 -ml-26 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url("${cover}")` }}
          ></div>
        </div>
        <div className="w-1/2 px-4 flex items-center justify-end">
          <div className="w-136 h-62 rounded-lg bg-tag-2 text-primary-title shadow-[-1.5rem_-1.5rem_#E6EBFB] z-0">
            <div className="w-full font-bold text-[2.5rem] pt-12 text-center">
              Tầm nhìn
            </div>
            <p className="w-full px-8 text-base/5 font-medium py-2 text-primary-paragraph text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              quod reprehenderit voluptatum veniam, dolore amet, voluptatibus
              eius, error temporibus quo accusamus expedita explicabo dolorum
              voluptates provident asperiores quas quae voluptatem.
            </p>
          </div>
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
      <div>
        <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
          Đội ngũ thành viên
        </div>
        <ScrollMemberList>
          {Object.entries(members)
            .map(([key, member]) => [key.slice(6), member])
            .sort((a, b) => a[0] - b[0])
            .map(([key, member]) => (
              <ScrollMemberListItem
                key={`story_${key}`}
                imageUrl={member.imageUrl}
                name={member.name}
                role={member.role}
              />
            ))}
        </ScrollMemberList>
      </div>
      <div>
        <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
          Lịch sử hoạt động
        </div>
        <ActivityHistoryList>
          {Object.entries(activityHistory)
            .map(([key, activity]) => [key.slice(9), activity])
            .sort((a, b) => a[0] - b[0])
            .map(([key, activity]) => (
              <ActivityHistoryListItem
                key={`activity_${key}`}
                startDate={activity.startDate}
                endDate={activity.endDate}
                imageUrl1={activity.imageUrl1}
                imageUrl2={activity.imageUrl2}
                description={activity.description}
              />
            ))}
        </ActivityHistoryList>
      </div>
      <div className="mt-20"></div>
      <ProjectLayout />
    </div>
  );
}

export default Aboutpage;
