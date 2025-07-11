import wave from "/images/wave.svg";
import PropTypes from "prop-types";

const StatsInfoSection = ({ statsData }) => {
  return (
    <div className="w-full h-full md:h-64 md:-mt-20 flex flex-col md:flex-row justify-center items-center">
        <div
          className="w-64 h-full hover:scale-105 opacity-80 hover:opacity-100 hover:[&>.data]:scale-115 transition-all duration-200 md:mt-0 mt-10 bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url("${wave}")` }}
        >
          <div className="w-full font-medium transition-all text-sm md:text-xl py-3 md:py-10 text-center pointer-events-none">
            Số sự kiện
          </div>
          <div className="data w-full font-bold text-2xl transition-all md:text-6xl text-secondary text-center pointer-events-none">
            {statsData?.num_events || ""}
          </div>
        </div>
        <div
          className="w-64 h-full hover:scale-105 opacity-80 hover:opacity-100 hover:[&>.data]:scale-115 transition-all duration-200 md:mt-0 mt-10 bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url("${wave}")` }}
        >
          <div className="w-full font-medium transition-all text-sm md:text-xl py-3 md:py-10 text-center pointer-events-none">
            Số người đã giúp đỡ
          </div>
          <div className="data w-full font-bold text-2xl transition-all md:text-6xl text-secondary text-center pointer-events-none">
            {statsData?.num_people_helped || ""}
          </div>
        </div>
        <div
          className="w-64 h-full hover:scale-105 opacity-80 hover:opacity-100 hover:[&>.data]:scale-115 transition-all duration-200 md:mt-0 mt-10 bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url("${wave}")` }}
        >
          <div className="w-full font-medium transition-all text-sm md:text-xl py-3 md:py-10 text-center pointer-events-none">
            Số tiền quyên góp
          </div>
          <div className="data w-full font-bold text-2xl transition-all md:text-6xl text-secondary text-center pointer-events-none">
            {statsData?.total_money_donated || ""}
          </div>
        </div>
        <div
          className="w-64 h-full hover:scale-105 opacity-80 hover:opacity-100 hover:[&>.data]:scale-115 transition-all duration-200 md:mt-0 mt-10 bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat cursor-pointer"
          style={{ backgroundImage: `url("${wave}")` }}
        >
          <div className="w-full font-medium transition-all text-sm md:text-xl py-3 md:py-10 text-center pointer-events-none">
            Số dự án đã và đang làm
          </div>
          <div className="data w-full font-bold text-2xl transition-all md:text-6xl text-secondary text-center pointer-events-none">
            {statsData?.num_projects || ""}
          </div>
        </div>
      </div>
  );
}

StatsInfoSection.propTypes = {
  statsData: PropTypes.shape({
    num_events: PropTypes.number,
    num_people_helped: PropTypes.number,
    total_money_donated: PropTypes.number,
    num_projects: PropTypes.number,
  }).isRequired,
};

export default StatsInfoSection;