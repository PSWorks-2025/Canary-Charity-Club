import PropTypes from 'prop-types';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { GlobalContextProvider } from './contexts/global.jsx';
import CombinedContextProvider from './contexts/combined.jsx';
import { Outlet } from 'react-router';

function Layout({ children }) {
  return (
    <CombinedContextProvider>
      <GlobalContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </GlobalContextProvider>
    </CombinedContextProvider>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    PropTypes.node, // A single React node
  ]),
  page: PropTypes.string,
};

export default Layout;
