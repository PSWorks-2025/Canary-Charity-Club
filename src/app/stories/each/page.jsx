import PropTypes from "prop-types";
import { motion } from "framer-motion";

import useImagePreloader from "../../../hooks/useImagePreloader";

import StorySection from "../../../components/pageSections/StorySection";
import LoadingScreen from "../../../components/screens/LoadingScreen";

const EachStoryPage = ({ storyName, sections }) => {
  const imageUrls = sections
    .map((section) => section.image?.src)
    .filter(Boolean);
  const imagesLoaded = useImagePreloader(imageUrls);

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }
  return (
    <div className="flex flex-col items-center p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{storyName}</h1>

      {sections.map((section, index) => (
        <StorySection key={index} section={section} />
      ))}
    <motion.button
      className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => console.log("support clicked") }
    >
      Ủng hộ
    </motion.button>
    </div>
  );
};

EachStoryPage.propTypes = {
  storyName: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default EachStoryPage;
