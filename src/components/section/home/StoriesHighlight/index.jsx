import React from "react";
import PropTypes from "prop-types";
import { ImageDisplay } from "../../../core/ImageDisplay";
import { TextDisplay } from "../../../core/TextDisplay";

const StoriesHighlight = ({ title, listData }) => {
  return (
    <div>
      <TextDisplay
        value={title}
        className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center"
      />
      <div className="w-full">
        {Object.entries(listData).map(([id, detail]) => (
          <div key={`event_${id}`} className="w-full h-84 mt-12 flex">
            <div className="w-1/2 h-full px-4">
              <ImageDisplay
                src={detail?.thumbnail?.src || ""}
                className="w-136 h-full bg-cover bg-center float-right rounded-lg"
              />
            </div>
            <div className="w-1/2 h-full px-4">
              <TextDisplay
                value={detail?.title || ""}
                className="font-bold text-2xl text-primary-title"
              />
              <TextDisplay
                value={detail?.abstract || ""}
                className="w-136 text-base/5 py-6 text-primary-paragraph"
                isMultiline={true}
              />
              <button
                onClick={() => {
                  window.location.href = "#";
                }}
                className="hover:scale-105 hover:bg-secondary-darken transition-all duration-200 py-2 px-5 rounded-full cursor-pointer font-semibold bg-secondary text-secondary-title"
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

StoriesHighlight.propTypes = {
  title: PropTypes.string.isRequired,
  listData: PropTypes.object.isRequired,
};

export default StoriesHighlight;