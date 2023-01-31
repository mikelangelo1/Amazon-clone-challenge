import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import Rating from "react-rating";

const Product = (props) => {
  const { name, price, seller, stock, img, star } = props.product;
  return (
    <div className="singal-product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-deatils">
        <h2>{name}</h2>
        <p>by : {seller}</p>
        <h4>${price}</h4>
        <p>only {stock} left in stock - order soon</p>
        {/* <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
          initialRating={star}
        /> */}
        <br />
        <button
          className="buy-btn"
          onClick={() => props.handelClick(props.product)}
        >
          {" "}
          <AddShoppingCartIcon /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
