import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdCircle } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";

export function ScrollStoryListItem({ imageUrl, title, description, href }) {
  return (
    <div className="w-88 mr-8 h-full">
      <div
        className="w-full h-60 bg-cover bg-center rounded-sm"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="font-bold text-2xl pt-5 text-primary-title">{title}</div>
      <p className="w-full text-base/5 py-5 text-primary-paragraph">
        {description}
      </p>
      <a href={href} className="text-secondary font-semibold">
        Đọc thêm
        <IoIosArrowForward className="inline-block mb-0.5" />
      </a>
    </div>
  );
}

ScrollStoryListItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export function ScrollStoryList({ children }) {
  const numberOfPages = Math.ceil(children.length / 3);

  const [page, setPage] = useState(0);

  return (
    <div className="w-full pt-12 flex justify-center">
      <div className="w-280 h-112 relative">
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          className="w-11 h-11 absolute -left-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer"
        >
          <IoIosArrowBack className="w-5 h-5" />
        </button>
        <button
          onClick={() => setPage(Math.min(page + 1, numberOfPages - 1))}
          className="w-11 h-11 absolute -right-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer"
        >
          <IoIosArrowForward className="w-5 h-5" />
        </button>
        <div className="w-full h-full overflow-hidden">
          <div
            className="w-100000 h-full flex transition-all duration-750"
            style={{ marginLeft: `calc(${-288 * page} * var(--spacing))` }}
          >
            {children}
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center">
          {Array.from(Array(numberOfPages).keys()).map((index) => (
            <MdCircle
              key={`dot_${index}`}
              className={`w-2.5 h-2.5 mx-0.5
                ${page === index ? "text-secondary" : "text-primary-darken-2"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ScrollStoryList.propTypes = {
  children: PropTypes.array,
};
