import React from 'react';
import PropTypes from 'prop-types';
import ImageDisplay from '../../../../core/ImageDisplay';
import TextDisplay from '../../../../core/TextDisplay';

const ProjectHighlightDisplay = ({ listData }) => {
  return (
    <section className="flex flex-col items-center w-full">
      <TextDisplay
        value="Dự án & hoạt động nổi bật đã thực hiện"
        className="text-[2.5rem] pt-20 font-bold mb-4 text-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/5 max-w-6xl mb-10">
        {Object.entries(listData).map(([id, project]) => (
          <div
            key={id}
            className="relative h-96 rounded-lg overflow-hidden shadow-md"
          >
            <ImageDisplay
              src={project.thumbnail.src}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6))`,
              }}
            />
            <TextDisplay
              value={project.title}
              className="absolute bottom-0 left-0 p-4 text-white font-semibold"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

ProjectHighlightDisplay.propTypes = {
  listData: PropTypes.object.isRequired,
};

export default ProjectHighlightDisplay;
