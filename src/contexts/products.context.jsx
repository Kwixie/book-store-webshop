import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  productsMap: {},
});

export const ProductsProvider = ({ children }) => {
  const [productsMap, setProductsMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const productsMap = await getCategoriesAndDocuments();
      console.log(productsMap);
      setProductsMap(productsMap);
    };

    getCategoriesMap();
  }, []);

  const value = { productsMap };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
