import { createContext, useState } from 'react';
import { basePath } from '../constants/global';
import PropTypes from 'prop-types';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <GlobalContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        basePath,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    PropTypes.node, // A single React node
  ]),
};

export default GlobalContext;
