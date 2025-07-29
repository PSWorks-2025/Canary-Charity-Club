import PropTypes from "prop-types";

const RecentProjectDisplay = ({ listData }) => {

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl pt-20 font-bold mb-4">
        Dự án & hoạt động nổi bật đã thực hiện
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/5 max-w-6xl mb-10">
        {Object.entries(listData)
          .map(([id, project]) => (
          <div
            key={id}
            className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden shadow-md"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)),url(${project.thumbnail.src})`,
            }}
          >
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <h3 className="absolute bottom-0 left-0 p-4 text-white font-semibold">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

RecentProjectDisplay.propTypes = {
  listData: PropTypes.object.isRequired, // Expecting an object with project data
};

export default RecentProjectDisplay;
