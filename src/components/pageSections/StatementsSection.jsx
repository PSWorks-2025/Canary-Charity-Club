import PropTypes from "prop-types";

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
          <div
            className="w-162 h-102 -mr-26 bg-cover bg-center float-right rounded-lg"
            style={{ backgroundImage: `url("${missionImage}")` }}
          ></div>
        </div>
        <div className="w-1/2 px-4 flex items-center">
          <div className="w-136 h-62 rounded-lg bg-tag-2 text-primary-title shadow-[1.5rem_-1.5rem_#E6EBFB]">
            <div className="w-full font-bold text-[2.5rem] pt-12 text-center">
              Sứ mệnh
            </div>
            <p className="w-full px-8 text-base/5 font-medium py-2 text-primary-paragraph text-center">
              {missionText}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full pt-20 flex flex-row-reverse">
        <div className="w-1/2 px-4">
          <div
            className="w-162 h-102 -ml-26 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url("${visionImage}")` }}
          ></div>
        </div>
        <div className="w-1/2 px-4 flex items-center justify-end">
          <div className="w-136 h-62 rounded-lg bg-tag-2 text-primary-title shadow-[-1.5rem_-1.5rem_#E6EBFB] z-0">
            <div className="w-full font-bold text-[2.5rem] pt-12 text-center">
              Tầm nhìn
            </div>
            <p className="w-full px-8 text-base/5 font-medium py-2 text-primary-paragraph text-center">
              {visionText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

StatementsSection.propTypes = {
  visionText: PropTypes.string.isRequired, // Expecting a string for the vision text
  missionText: PropTypes.string.isRequired, // Expecting a string for the mission text
  visionImage: PropTypes.string.isRequired, // Expecting a string for the vision image URL
  missionImage: PropTypes.string.isRequired, // Expecting a string for the mission image
};

export default StatementsSection;
