import React from "react";
import wave from "/images/wave.svg";
import PropTypes from "prop-types";
import { ImageDisplay } from "../../../core/ImageDisplay";
import { TextDisplay } from "../../../core/TextDisplay";

const StatsHighlight = ({ statsData }) => {
  return (
    <div className="w-full h-full md:h-64 md:-mt-20 flex flex-col md:flex-row justify-center items-center">
      {[
        { label: "Số sự kiện", value: statsData?.num_events },
        { label: "Số người đã giúp đỡ", value: statsData?.num_people_helped },
        { label: "Số tiền quyên góp", value: statsData?.total_money_donated },
        { label: "Số dự án đã và đang làm", value: statsData?.num_projects },
      ].map((item, index) => (
        <div
          key={index}
          className="w-64 h-full hover:scale-105 opacity-80 hover:opacity-100 hover:[&>.data]:scale-115 transition-all duration-200 md:mt-0 mt-10 bg-tag mx-4 rounded-3xl shadow-lg bg-contain bg-bottom bg-no-repeat cursor-pointer"
        >
          <ImageDisplay src={wave} className="w-full h-full absolute inset-0" />
          <TextDisplay
            value={item.label}
            className="w-full font-medium text-sm md:text-xl py-3 md:py-10 text-center pointer-events-none"
          />
          <TextDisplay
            value={item.value || ""}
            className="data w-full font-bold text-2xl md:text-6xl text-secondary text-center pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
};

StatsHighlight.propTypes = {
  statsData: PropTypes.shape({
    num_events: PropTypes.number,
    num_people_helped: PropTypes.number,
    total_money_donated: PropTypes.number,
    num_projects: PropTypes.number,
  }).isRequired,
};

export default StatsHighlight;