import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdCircle } from "react-icons/md";
import { useNavigate } from "react-router";
import { TextDisplay } from "../../../core/TextDisplay";

const EventsHighlight = ({ title, listData }) => {
  const navigate = useNavigate();
  const items = Object.entries(listData);
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const currentItems = items.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <div>
      <TextDisplay
        value={title}
        className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center"
      />

      <div className="w-full pt-12 flex justify-center">
        <div className="w-280 h-112 relative">
          <button
            onClick={() => setPage(Math.max(page - 1, 0))}
            className="hover:scale-105 hover:bg-primary-darken-2 transition-all duration-200 w-11 h-11 absolute -left-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowBack className="w-5 h-5" />
          </button>

          <button
            onClick={() => setPage(Math.min(page + 1, numberOfPages - 1))}
            className="hover:scale-105 hover:bg-primary-darken-2 transition-all duration-200 w-11 h-11 absolute -right-6 top-54 rounded-full bg-primary-darken flex justify-center items-center cursor-pointer"
          >
            <IoIosArrowForward className="w-5 h-5" />
          </button>

          <div className="w-full h-full overflow-hidden">
            <div className="w-full h-full flex transition-all duration-500 space-x-8">
              {currentItems.map(([id, detail]) => (
                <div key={`story_${id}`} className="w-88 h-full">
                  <div
                    className="w-full h-60 bg-cover bg-center rounded-sm"
                    style={{
                      backgroundImage: `url("${detail?.thumbnail?.src || ""}")`,
                    }}
                  ></div>
                  <div className="font-bold text-2xl pt-5 text-primary-title">
                    {detail?.title || ""}
                  </div>
                  <p className="w-full text-base/5 py-5 text-primary-paragraph">
                    {detail?.abstract || ""}
                  </p>
                  <button
                    onClick={() => navigate("#")}
                    className="text-secondary font-semibold transition-all duration-200 hover:text-secondary-hover hover:translate-x-1"
                  >
                    Đọc thêm
                    <IoIosArrowForward className="inline-block mb-0.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 w-full flex justify-center mt-4">
            {Array.from({ length: numberOfPages }, (_, index) => (
              <MdCircle
                key={`dot_${index}`}
                onClick={() => setPage(index)}
                className={`w-2.5 h-2.5 mx-0.5 transition-all duration-200 cursor-pointer ${
                  page === index
                    ? "text-secondary scale-115"
                    : "text-primary-darken-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

EventsHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  listData: PropTypes.object.isRequired,
};

export default EventsHighlight;
