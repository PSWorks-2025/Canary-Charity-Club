import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageDisplay from '../../../../core/ImageDisplay';
import TextDisplay from '../../../../core/TextDisplay';

const FundraisingHeroSectionDisplay = ({
  imageUrl = 'https://picsum.photos/3000/1000',
  fundraiserName = 'Chương trình quyên góp',
  amountRaised = 20,
  goalAmount = 30,
  qrCodeUrl = 'https://picsum.photos/300',
  buttonColor = '#4160DF',
}) => {
  const [showQRModal, setShowQRModal] = useState(false);

  const progressPercentage = Math.min((amountRaised / goalAmount) * 100, 100);

  return (
    <div className="mt-[64px] w-full">
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
            {/* <ImageDisplay src={qrCodeUrl} className="w-20 h-20" alt="QR Code" /> */}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              style={{ backgroundColor: buttonColor }}
              onClick={() => setShowQRModal(true)}
            >
              Ủng hộ
            </button>
          </div>
        </div>
      </ImageDisplay>

      {/* QR Modal */}
      {showQRModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowQRModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-center mb-4">
              Cảm ơn bạn đã ủng hộ
            </h2>
            <img
              src={qrCodeUrl || 'https://via.placeholder.com/300'}
              alt="QR Code"
              className="w-full h-auto object-contain"
            />
            <button
              className="mt-4 w-full text-white bg-blue-600 py-2 rounded hover:bg-blue-700"
              onClick={() => setShowQRModal(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

FundraisingHeroSectionDisplay.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  fundraiserName: PropTypes.string.isRequired,
  amountRaised: PropTypes.number.isRequired,
  goalAmount: PropTypes.number.isRequired,
  qrCodeUrl: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
};

export default FundraisingHeroSectionDisplay;
