import { GlobalContextProvider } from './global';
import { DataContextProvider } from './data';
import PropTypes from 'prop-types';

const CombinedContextProvider = ({ children }) => {
  return (
    <GlobalContextProvider>
    <DataContextProvider>
      {children}
    </DataContextProvider>
    </GlobalContextProvider>
  );
};

CombinedContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    PropTypes.node, // A single React node
  ]),
};

export default CombinedContextProvider;
