import React from "react";
import PropTypes from "prop-types";

const EachStoryPage = ({ storyName, sections, images }) => {
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto">
      {/* Title Centered */}
      <h1 className="text-3xl font-bold text-center mb-6">{storyName}</h1>

      {/* Story Sections */}
      {sections.map((section, index) => (
        <div key={index} className="w-full max-w-3xl mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <p className="text-lg text-gray-700 mb-4">{section.content}</p>

          {/* Image (if available) */}
          {images[index] && (
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-2xl rounded-lg shadow-md"
                src={images[index].src}
                alt={images[index].alt}
              />
              {images[index].caption && (
                <p className="text-sm text-gray-500 italic mt-2">
                  {images[index].caption}
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Support Button */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
        Ủng hộ
      </button>
    </div>
  );
};

// Props validation
EachStoryPage.propTypes = {
  storyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    }),
  ),
};

// Default props in case no images are provided
EachStoryPage.defaultProps = {
  images: [],
};

export default EachStoryPage;
