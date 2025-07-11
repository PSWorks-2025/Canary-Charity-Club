import {
  ActivityHistoryList,
  ActivityHistoryListItem,
} from "../Lists/ActivityHistoryList";

import PropTypes from "prop-types";

const ActivityHistorySection = ({ listData }) => {
  return (
    <div>
      <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
        Lịch sử hoạt động
      </div>
      <ActivityHistoryList>
        {listData.map((activity, index) => (
          <ActivityHistoryListItem
            key={`activity_${index}`}
            startDate={new Date(
              activity.started_time.seconds * 1000 +
                activity.started_time.nanoseconds / 1000
            ).toLocaleDateString("en-US", {
              month: "2-digit",
              year: "numeric",
            })}
            endDate={new Date(
              activity.ended_time.seconds * 1000 +
                activity.ended_time.nanoseconds / 1000
            ).toLocaleDateString("en-US", {
              month: "2-digit",
              year: "numeric",
            })}
            imageUrl1={activity.image1}
            imageUrl2={activity.image2}
            description={activity.text}
          />
        ))}
      </ActivityHistoryList>
    </div>
  );
};

ActivityHistorySection.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      started_time: PropTypes.string.isRequired,
      ended_time: PropTypes.string.isRequired,
      image1: PropTypes.string.isRequired,
      image2: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityHistorySection;
