import React from "react";
import PropTypes from "prop-types";
import { ImageDisplay } from "../../../core/ImageDisplay";
import { TextDisplay } from "../../../core/TextDisplay";

const StatementsSection = ({
  visionText,
  missionText,
  visionImage,
  missionImage,
}) => {
  return (
    <div>
      <div className="w-full pt-20 flex">
        <div className="w-1/2 px-4">
          <ImageDisplay
            src={missionImage}
            className="w-162 h-102 -mr-26 bg-cover bg-center float-right rounded-lg"
          />
        </div>
        <div className="w-1/2 px-4 flex items-center">
          <div className="w-136 h-62 rounded-lg bg-tag-2 text-primary-title shadow-[1.5rem_-1.5rem_#E6EBFB]">
            <TextDisplay
              value="Sứ mệnh"
              className="w-full font-bold text-[2.5rem] pt-12 text-center"
            />
            <TextDisplay
              value={missionText}
              className="w-full px-8 text-base/5 font-medium py-2 text-primary-paragraph text-center"
              isMultiline={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-20 flex flex-row-reverse">
        <div className="w-1/2 px-4">
          <ImageDisplay
            src={visionImage}
            className="w-162 h-102 -ml-26 bg-cover bg-center rounded-lg"
          />
        </div>
        <div className="w-1/2 px-4 flex items-center justify-end">
          <div className="w-136 h-62 rounded-lg bg-tag-2 text-primary-title shadow-[-1.5rem_-1.5rem_#E6EBFB] z-0">
            <TextDisplay
              value="Tầm nhìn"
              className="w-full font-bold text-[2.5rem] pt-12 text-center"
            />
            <TextDisplay
              value={visionText}
              className="w-full px-8 text-base/5 font-medium py-2 text-primary-paragraph text-center"
              isMultiline={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

StatementsSection.propTypes = {
  visionText: PropTypes.string.isRequired,
  missionText: PropTypes.string.isRequired,
  visionImage: PropTypes.string.isRequired,
  missionImage: PropTypes.string.isRequired,
};

export default StatementsSection;