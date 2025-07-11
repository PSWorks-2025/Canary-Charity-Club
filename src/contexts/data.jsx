import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [hasStartedLoading, setStartedLoading] = useState({});

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        hasStartedLoading,
        setStartedLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node), // Array of React nodes
    PropTypes.node, // A single React node
  ]),
};

export default DataContext;
