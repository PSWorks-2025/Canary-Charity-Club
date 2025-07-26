import PropTypes from "prop-types";
import { ImageDisplay } from "../../../core/ImageDisplay";

const HeroSection = ({ image }) => {
  return (
    <ImageDisplay
      src={image}
      className="w-full h-178 bg-cover bg-center"
      style={{ height: "calc(100vh - 5rem)" }}
    />
  );
};

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeroSection;