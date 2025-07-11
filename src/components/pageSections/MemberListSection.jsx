import {
  MemberList,
  MemberListItem,
} from "../Lists/MemberList";

import PropTypes from "prop-types";

const MemberListSection = ({ listData }) => {
  return (
    <div>
      <div className="w-full pt-20 font-bold text-[2.5rem] text-primary-title text-center">
        Đội ngũ thành viên
      </div>
      <MemberList>
        {listData
          .map((member, index) => (
            <MemberListItem
              key={`member_${index}`}
              imageUrl={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
      </MemberList>
    </div>
  );
};

MemberListSection.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired, // Expecting a string for the image URL
      name: PropTypes.string.isRequired, // Expecting a string for the member's name
      role: PropTypes.string.isRequired, // Expecting a string for the member's role
    })
  ).isRequired, // Expecting an array of objects with the specified shape
};

export default MemberListSection;
