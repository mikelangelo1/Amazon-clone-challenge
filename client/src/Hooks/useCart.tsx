import { useEffect, useState } from "react";
import { getStoredCart } from "../utility/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (products.length) {
      const savedProduct = getStoredCart();
      let storedCart = [];
      for (let key in savedProduct) {
        let addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedProduct[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  return [cart, setCart];
};
export default useCart;
