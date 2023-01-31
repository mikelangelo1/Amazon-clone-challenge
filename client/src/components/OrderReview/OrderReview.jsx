import useSWR from "swr";
import React from "react";
import { useRouter } from "next/router";
import useProducts, { ProductProps } from "../../Hooks/useProducts/useProducts";
import { clearTheCart, deleteFromDb } from "../../utility/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";
import useCart from "../../Hooks/useCart";
import Cart from "../Cart/Cart";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

const { products, error } = useSWR("/api/staticdata", fetcher);

const OrderReview = () => {
  const [cart, setCart] = useCart(products);
  const handelRemove = (key) => {
    let newProduct = cart.filter((product) => product.key !== key);
    setCart(newProduct);
    deleteFromDb(key);
  };
  const router = useRouter();

  const handlePlaceOrder = () => {
    router.push("/placeorder");
    setCart([]);
    clearTheCart();
  };
  return (
    <div className="main-product-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.key}
            handelRemove={handelRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
