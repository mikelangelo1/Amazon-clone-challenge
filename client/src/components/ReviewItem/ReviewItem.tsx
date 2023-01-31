import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, price, img, key } = props.product;
  return (
    <div className="singal-product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-deatils">
        <h2>{name}</h2>
        <h4>Price : ${price}</h4>
        <h3>Quantity : {quantity}</h3>
        <br />
        <button className="buy-btn" onClick={() => props.handelRemove(key)}>
          {" "}
          <FontAwesomeIcon icon={faTrash} /> Remove Item
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
