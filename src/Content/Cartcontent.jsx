import React, { createContext, useState, useContext } from "react";

const Cartcontext = createContext({
  product: [],
  addToCart: () => {},
});



 const CartcontentProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addToCart = (cart) => {
    setProduct((prevState) => [...prevState, cart]);
  };

  return (
    <Cartcontext.Provider value={{ product, addToCart }}>
      {children}
    </Cartcontext.Provider>
  );
};
 export default CartcontentProvider;


 