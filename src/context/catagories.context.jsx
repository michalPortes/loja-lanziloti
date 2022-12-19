import { createContext, useState, useEffect } from 'react';

import { getCatagoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CatagoriesContext = createContext({
  categoriesMap: {},
});

export const CatagoriesProvider = ({ children }) => {

  const [categoriesMap, setCatagoreisMap] = useState({})

  useEffect(() => {
    const getCatagoriesMap = async () => {
      const categoryMap = await getCatagoriesAndDocuments()

      setCatagoreisMap(categoryMap)

    }
    getCatagoriesMap()
  }, [])


  const value = { categoriesMap };
  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  )
}