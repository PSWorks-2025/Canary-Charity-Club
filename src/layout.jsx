import PropTypes from 'prop-types';
import Header from '../Section-And-Core-Component/CanarySectionsModel/Header/index.jsx';
import Footer from '../Section-And-Core-Component/CanarySectionsModel/Footer/index.jsx';
import GlobalContext, { GlobalContextProvider } from './contexts/GlobalContext.jsx';
import { Outlet } from 'react-router';

function Layout({ children }) {
  return (
      <GlobalContextProvider>
        <Header GlobalContext={GlobalContext} />
        <Outlet />
        <Footer GlobalContext={GlobalContext} />
      </GlobalContextProvider>
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
