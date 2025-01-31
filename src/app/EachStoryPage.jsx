import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useImagePreloader from "../hooks/useImagePreloader";

import SupportButton from "../components/SupportButton";
import StorySection from "../components/StorySection";
import LoadingScreen from "../components/screens/LoadingScreen";

const EachStoryPage = ({ storyName, sections }) => {
  const imagesLoaded = useImagePreloader(sections);

  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{storyName}</h1>

      {!imagesLoaded ? (
        <LoadingScreen />
      ) : (
        sections.map((section, index) => (
          <StorySection key={index} section={section} />
        ))
      )}

      {imagesLoaded && (
        <SupportButton onClick={() => console.log("support clicked")} />
      )}
    </div>
  );
};

EachStoryPage.propTypes = {
  storyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default EachStoryPage;
