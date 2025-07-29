import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../contexts/GlobalContext';
import FundraisingHeroSectionDisplay from '../../components/SectionsModel/Donate/DonateProgress/FundraisingHeroSectionDisplay';
import DonorListDisplay from '../../components/SectionsModel/Donate/DonorList/DonorListDisplay';

const DonatePage = ({
  campaignTitle,
  campaignDescription,
}) => {
  const { setCurrentPage, fundraising } = useContext(GlobalContext);

  const mainPageComponentsData = {}

  useEffect(() => {
    setCurrentPage('donate');
  }, [setCurrentPage]);

//   const imagesLoaded = useImagePreloader([
//   mainPageComponentsData?.hero_sections?.donate?.image || '',
//   mainPageComponentsData?.hero_sections?.donate?.qrcode || '',
// ]);

//   if (!imagesLoaded) {
//     return <LoadingScreen />;
//   }


  const handleSupportClick = () => {
    alert('Cảm ơn bạn đã ủng hộ! 🎉');
  };

  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-hidden p-6">
      {/* Hero Section */}
      <FundraisingHeroSectionDisplay
        imageUrl={fundraising?.image_url || "https"}
        fundraiserName={fundraising?.fundraiser_name || ""}
        amountRaised={fundraising?.amount_raised || 0}
        goalAmount={fundraising?.goal_amount || 0}
        qrCodeUrl={fundraising?.qr_code_url || "https"}
        onSupportClick={handleSupportClick}
      />

      {/* Campaign Details */}
      <div className="mt-6 px-6">
        <h1 className="text-4xl font-bold text-gray-900">{campaignTitle}</h1>
        <p className="text-gray-700 mt-2">{campaignDescription}</p>
      </div>

      {/* Donors List */}
      <DonorListDisplay donors={fundraising?.donors} />

    </div>
  );
};

DonatePage.propTypes = {
  campaignTitle: PropTypes.string.isRequired,
  campaignDescription: PropTypes.string.isRequired,
  fundraiserName: PropTypes.string.isRequired,
  amountRaised: PropTypes.number.isRequired,
  goalAmount: PropTypes.number.isRequired,
  qrCodeUrl: PropTypes.string.isRequired,
  donors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalCollected: PropTypes.number.isRequired,
  totalSpent: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DonatePage;
