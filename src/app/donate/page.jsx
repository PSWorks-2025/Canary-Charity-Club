import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import GlobalContext from "../../contexts/global";
import useDocData from "../../hooks/useDocData";
import useImagePreloader from "../../hooks/useImagePreloader";
import LoadingScreen from "../../components/core/screens/LoadingScreen";
import FundraisingHeroSection from "../../components/pageSections/FundraisingHeroSection";
import DonorList from "../../components/core/lists/DonorList";
import loading from "./images/loading.gif";


const DonatePage = ({
  campaignTitle,
  campaignDescription,
  imageUrl = "https://i.ibb.co/kVQhWyjz/logo.png",
  fundraiserName,
  amountRaised,
  goalAmount,
  qrCodeUrl,
  donors,
  totalCollected,
  totalSpent,
  transactions,
}) => {
  const { setCurrentPage } = useContext(GlobalContext);

  useEffect(() => setCurrentPage("donate"), [setCurrentPage]);

  const mainPageComponentsData = useDocData("Main pages", "components ");

  const heroImage = useImagePreloader([imageUrl, qrCodeUrl]);
  const imagesLoaded = useImagePreloader([imageUrl, qrCodeUrl]);

  const handleSupportClick = () => {
    alert("Cảm ơn bạn đã ủng hộ! 🎉");
  };

  useEffect(() => {
    console.log(imagesLoaded);
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-hidden p-6">
      {/* Header with Background Image and Progress */}
      <FundraisingHeroSection
        imageUrl={mainPageComponentsData?.hero_sections?.donate?.image || ""}
        fundraiserName={fundraiserName}
        amountRaised={amountRaised}
        goalAmount={goalAmount}
        qrCodeUrl={qrCodeUrl}
        onSupportClick={handleSupportClick}
      />

      {/* Campaign Details */}
      <div className="mt-6 px-6">
        <h1 className="text-4xl font-bold text-gray-900">{campaignTitle}</h1>
        <p className="text-gray-700 mt-2">{campaignDescription}</p>
      </div>
      {/* Donors List */}
      <DonorList donors={donors} />

      {/* Transactions Table */}
      {/* <TransactionsTable
        totalCollected={totalCollected}
        totalSpent={totalSpent}
        transactions={transactions}
      /> */}
    </div>
  );
};

DonatePage.propTypes = {
  campaignTitle: PropTypes.string.isRequired,
  campaignDescription: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
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
