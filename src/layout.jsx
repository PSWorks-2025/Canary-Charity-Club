import PropTypes from "prop-types";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    PropTypes.node, // A single React node
  ]),
};

export default Layout;
