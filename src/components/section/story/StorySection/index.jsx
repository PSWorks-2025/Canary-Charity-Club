import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ImageDisplay } from "../../../core/ImageDisplay";
import { TextDisplay } from "../../../core/TextDisplay";

const StorySection = ({ section }) => {
  return (
    <motion.div
      className="w-full max-w-3xl mb-8"
      initial={section.animation?.initial || { opacity: 0, y: 50 }}
      whileInView={section.animation?.animate || { opacity: 1, y: 0 }}
      transition={section.animation?.transition || { duration: 0.6 }}
      viewport={{ once: true }}
    >
      <TextDisplay
        value={section.title}
        className="text-2xl font-semibold mb-2"
      />
      <div
        className={`flex gap-6 ${section.layout === "textright" ? "flex-row-reverse" : "flex-row"}`}
      >
        <motion.div
          className="flex-1"
          initial={section.textAnimation?.initial || { opacity: 0, x: -50 }}
          whileInView={section.textAnimation?.animate || { opacity: 1, x: 0 }}
          transition={
            section.textAnimation?.transition || { duration: 0.6, delay: 0.2 }
          }
          viewport={{ once: true }}
        >
          <TextDisplay
            value={section.content}
            className="text-lg text-gray-700 mb-4"
            isMultiline={true}
          />
        </motion.div>
        {section.image && (
          <motion.div
            className="flex-1"
            initial={section.imageAnimation?.initial || { opacity: 0, x: 50 }}
            whileInView={
              section.imageAnimation?.animate || { opacity: 1, x: 0 }
            }
            transition={
              section.imageAnimation?.transition || {
                duration: 0.6,
                delay: 0.2,
              }
            }
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <ImageDisplay
                src={section.image.src}
                alt={section.image.alt}
                className="w-full rounded-lg shadow-md"
              />
              {section.image.caption && (
                <TextDisplay
                  value={section.image.caption}
                  className="text-sm text-gray-500 italic mt-2"
                />
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

StorySection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    layout: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    }),
    animation: PropTypes.object,
    textAnimation: PropTypes.object,
    imageAnimation: PropTypes.object,
  }).isRequired,
};

export default StorySection;