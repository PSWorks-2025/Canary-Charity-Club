import PropTypes from 'prop-types';
import TextDisplay from '../../../../core/TextDisplay';

function DonateOverviewDisplay({ pageData, buttonColor }) {
  return (
    <>
      <TextDisplay
        className="w-full text-[2.5rem] font-bold text-black text-center mb-6"
        value={pageData.heading}
      />
      <div className="flex flex-row justify-center items-start gap-10 text-center">
        {[0, 1].map((index) => (
          <div key={index} className="flex flex-col flex-1 items-center">
            <div
              className="w-full h-[40vh] bg-gray-600 relative flex flex-col justify-end rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url("${
                  pageData.images?.[index] ||
                  'https://blog.photobucket.com/hubfs/upload_pics_online.png'
                }")`,
              }}
            >
              <TextDisplay
                className="text-base font-semibold text-white bg-black/40 px-2 py-1 rounded-t"
                value={index === 0 ? pageData.title1 : pageData.title2}
              />
            </div>
            <button
              className="mt-2 text-white font-medium px-3 py-2 rounded-full opacity-80 pointer-events-none"
              style={{ backgroundColor: buttonColor }}
            >
              {index === 0 ? 'Mua ngay' : 'Ủng hộ'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

DonateOverviewDisplay.propTypes = {
  pageData: PropTypes.shape({
    heading: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default DonateOverviewDisplay;
