import { useContext } from "react";
import { getDataFromFirestore } from "../services/database/read";

import DataContext from "../contexts/data";

let hasStartedLoading = {}

const useDocData = (collectionId, docId) => {
  const { data, setData } =
    useContext(DataContext);

  if (
    hasStartedLoading[`${collectionId}/${docId}`] ||
    data[`${collectionId}/${docId}`] !== undefined
  )
    return data[`${collectionId}/${docId}`] || null; // If data is already set, skip fetching

  // Set loading state to true for the specific document
  // This prevents multiple fetches for the same document
  hasStartedLoading[`${collectionId}/${docId}`] = true;

  getDataFromFirestore(collectionId, docId).then((fetchedData) => {
    console.log(`Done fetching data from collection "${collectionId}" document "${docId}"`);
    setData((prevData) => ({
      ...prevData,
      [`${collectionId}/${docId}`]: fetchedData,
    }));
  });

  return data[`${collectionId}/${docId}`] || null;
};

export default useDocData;
