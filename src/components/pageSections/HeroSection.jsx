import PropTypes from "prop-types";

const HeroSection = ({ image }) => {
  return (
    <div
      className="w-full h-178 bg-cover bg-center"
      style={{
        backgroundImage: `url("${image}")`,
        height: "calc(100vh - 5rem)",
      }}
    ></div>
  );
};

HeroSection.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HeroSection;
