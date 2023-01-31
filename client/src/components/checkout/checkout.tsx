import React from "react";
import Image from "next/image";
// import { StarIcon} from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { RateReviewRounded } from "@mui/icons-material";
// import { useDispatch } from 'react-redux';
// import {addToBasket, removeFromBasket, removeGroupedFromBasket
// } from "../slices/basketSlice";

function CheckoutProduct(props) {
  const {
    id,
    name,
    price,
    rating,
    description,
    category,
    img,
    hasPrime,
    quantity,
    addItemToCart,
  } = props.product;
  const total = price * quantity;

  const removeItemFromBasket = () => {
  };

  function removeGroupFromBasket() {
  }

  return (
    <div className="checkout-product border-b-2">
      <input type="checkbox" />
      <img src={img} height={140} width={140} className="mx-2 " alt={""} />

      <div className="checkout-product-middle  ">
        <p className="font-medium">{name}</p>
        <div className="flex mt-2">
         <RateReviewRounded />
        </div>

        <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>

        <div className="font-semibold">
          <Currency quantity={total} currency="USD" />
        </div>

        {props.hasPrime && (
          <div className="flex items-center space-x-2">
            <img src="./prime.png" className="w-12" />
            <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
          </div>
        )}
      </div>

      {/* Right Add and Remove button
            <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                    <button className="button font-semibold" onClick={addItemToBasket}>Add to Basket</button>
                    <button className="button font-semibold" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div> */}

      {/* Buttons on the right of the products */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <div className="flex justify-between xs:justify-start">
          <button
            className="button minus-button "
            onClick={removeItemFromBasket}
          >
            {/* <MinusSmIcon className="h-5 text-black" /> */}
            <div className="minus-button-sm font-extrabold">-</div>
          </button>
          <div className="p-2 whitespace-normal sm:p-1 sm:whitespace-nowrap">
            <span className="font-bold">{quantity}</span>
          </div>
          <button
            className="button minus-button  "
            onClick={() => props.handleClick(props.product)}
          >
            <div className="minus-button font-extrabold">+</div>
          </button>
        </div>
        <div>
          <div className="flex  flex-row-reverse flex-wrap mb-4 bg-grey-800 p-3 border-grey-300 rounded-sm focus:outline-none">
            <button className="btng mb-3" onClick={removeGroupFromBasket}>
              Delete
            </button>
            <button
              className="btng flex flex-row space-x-0"
              onClick={removeGroupFromBasket}
            >
              <span className="">Save for later</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
