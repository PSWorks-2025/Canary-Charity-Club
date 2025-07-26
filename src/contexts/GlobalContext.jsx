import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  // const [hasStartedLoading, setStartedLoading] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        // hasStartedLoading,
        // setStartedLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// GlobalContextProvider.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node), // Array of React nodes
//     PropTypes.node, // A single React node
//   ]),
// };

export default GlobalContext;
