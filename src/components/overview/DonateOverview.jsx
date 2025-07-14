import "./styles.css";
function DonateOverview() {
  return (
    <section className="donate">
      <h2>&ldquo;Hãy đồng hành cùng chúng mình&rdquo;</h2>
      <div className="donate_container">
        <div>
          <div className="donate_overview">
            <h3>Đặt mua bánh chưng</h3>
          </div>
          <button
            style={{ backgroundColor: "#4160DF" }}
            className="text-white font-medium px-3 py-2 rounded-full"
          >
            Mua ngay
          </button>
        </div>

        <div>
          <div className="donate_overview">
            <h3>Ủng hộ hiện kim</h3>
          </div>
          <button
            style={{ backgroundColor: "#4160DF" }}
            className="text-white font-medium px-3 py-2 rounded-full"
          >
            Ủng hộ
          </button>
        </div>
      </div>
    </section>
  );
}

export default DonateOverview;
