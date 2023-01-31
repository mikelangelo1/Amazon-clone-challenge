import React from "react";
import Currency from "react-currency-formatter";

const Cart = (props) => {
  const { cart } = props;
  let totalLength = 0;
  let total = 0;
  for (let product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    total = (total + product.price) * product.quantity;
    totalLength = totalLength + product.quantity;
  }

  let shipping = total > 0 ? 15 : 0;
  let tax = (total + shipping) * 0.1;
  let grandTotal = total + tax + shipping;
  return (
    <>
      <h1 className="font-bold text-xl whitespace-nowrap">
        Subtotal ({totalLength} items):
        <span className="font-bold ml-1">
          <Currency quantity={grandTotal} currency="GBP" />
        </span>
      </h1>

      <button className={`button font-semibold mt-2 `}>
        Proceed to checkout
      </button>
    </>
  );
};

export default Cart;
