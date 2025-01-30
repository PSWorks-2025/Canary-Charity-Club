import PropTypes from "prop-types";

const FundraisingPage = ({
  campaignTitle,
  campaignDescription,
  imageUrl,
  fundraiserName,
  amountRaised,
  goalAmount,
  qrCodeUrl,
  donors,
  transactions,
}) => {
  const progressPercentage = Math.min((amountRaised / goalAmount) * 100, 100);

  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-hidden p-6">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex justify-center">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={imageUrl}
          alt="Hero"
        />
      </div>

      {/* Campaign Details */}
      <div className="mt-6 px-6">
        <h1 className="text-4xl font-bold text-gray-900">{campaignTitle}</h1>
        <p className="text-gray-700 mt-2">{campaignDescription}</p>
      </div>

      {/* Fundraising Progress */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold">{fundraiserName}</h2>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{amountRaised.toLocaleString()} VND</span>
          <span>{progressPercentage.toFixed(0)}%</span>
        </div>
        <p className="text-gray-600 mt-2">
          Cần đạt được: {goalAmount.toLocaleString()} VND
        </p>

        {/* QR Code & Donation Button */}
        <div className="flex items-center justify-between mt-4">
          <img src={qrCodeUrl} alt="QR Code" className="w-20 h-20" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Ủng hộ
          </button>
        </div>
      </div>

      {/* Donors List */}
      <div className="mt-8 max-w-lg mx-auto">
        <h3 className="text-2xl font-bold">Danh sách ủng hộ</h3>
        <ul className="mt-4">
          {donors.map((donor, index) => (
            <li key={index} className="border-b py-2">
              <strong>{donor.name}</strong> ủng hộ{" "}
              {donor.amount.toLocaleString()} VND
            </li>
          ))}
        </ul>
      </div>

      {/* Transactions Table */}
      <div className="mt-8 max-w-lg mx-auto">
        <h3 className="text-2xl font-bold">Thống kê tài chính</h3>
        <table className="w-full mt-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="p-2">Mã giao dịch</th>
              <th className="p-2">Người nhận</th>
              <th className="p-2">Số tiền</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{tx.id}</td>
                <td className="p-2">{tx.recipient}</td>
                <td className="p-2">{tx.amount.toLocaleString()} VND</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

FundraisingPage.propTypes = {
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
    }),
  ).isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      recipient: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FundraisingPage;
