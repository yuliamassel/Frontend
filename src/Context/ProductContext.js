import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const productContext = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://blanja-app-2codeblue.herokuapp.com/products`)
      .then((res) => {
        const result = res.data.data;
        setProducts(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <productContext.Provider value={{ products, setProducts }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContext;
