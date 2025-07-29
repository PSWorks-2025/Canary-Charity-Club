import React from 'react';
import PropTypes from 'prop-types';
import ImageDisplay from '../../../../core/ImageDisplay';
import TextDisplay from '../../../../core/TextDisplay';

const FundraisingHeroSectionDisplay = ({
  imageUrl = "https://picsum.photos/3000/1000", // fallback handled in ImageDisplay
  fundraiserName = "Chương trình quyên góp",
  amountRaised = 20,
  goalAmount = 30, // avoid division by 0
  qrCodeUrl = "https://picsum.photos/300",
  onSupportClick = () => {},
}) => {
  const progressPercentage = Math.min((amountRaised / goalAmount) * 100, 100);

  return (
    <ImageDisplay
      src={imageUrl}
      className="rounded-xl shadow-xl relative w-full h-[400px] flex items-center justify-end bg-cover bg-center text-dark p-8"
    >
      <div className="bg-white/80 p-6 rounded-xl shadow-lg max-w-md w-full">
        <TextDisplay value={fundraiserName} className="text-2xl font-bold" />
        <div className="mt-4 w-full rounded-full p-1 border-2 border-gray-400">
          <div className="w-full bg-gray-400 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <TextDisplay value={`${amountRaised.toLocaleString()} VND`} />
          <TextDisplay value={`${progressPercentage.toFixed(0)}%`} />
        </div>
        <TextDisplay
          value={`Cần đạt được: ${goalAmount.toLocaleString()} VND`}
          className="mt-2"
        />
        <div className="flex items-center justify-around mt-4">
          <ImageDisplay src={qrCodeUrl} className="w-20 h-20" alt="QR Code" />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={onSupportClick} //todo: display the qr code when support is clicked
          >
            Ủng hộ
          </button>
        </div>
      </div>
    </ImageDisplay>
  );
};

FundraisingHeroSectionDisplay.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  fundraiserName: PropTypes.string.isRequired,
  amountRaised: PropTypes.number.isRequired,
  goalAmount: PropTypes.number.isRequired,
  qrCodeUrl: PropTypes.string.isRequired,
  onSupportClick: PropTypes.func.isRequired,
};

export default FundraisingHeroSectionDisplay;
