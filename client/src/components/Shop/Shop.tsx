import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utility/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  let [products, setProducts] = useState([]);
  let [displayUi, setDisplayUi] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayUi(data);
      });
  }, []);

  useEffect(() => {
    let savedData = getStoredCart();
    let storedCart = [];
    if (products.length) {
      for (let key in savedData) {
        const addProduct = products.find((product) => product.key === key);
        if (addProduct) {
          const quantity = savedData[key];
          addProduct.quantity = Number(quantity);
          storedCart.push(addProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  let handelClick = (product) => {
    let exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  const handelSearch = (event) => {
    let myKeyWord = event.target.value;
    let newSearch = products.filter((product) =>
      product.name.trim().toLowerCase().includes(myKeyWord.trim().toLowerCase())
    );
    setDisplayUi(newSearch);
    console.log(newSearch);
  };

  return (
    <>
      <div className="sub-search">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handelSearch}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
      <section className="main-product-container">
        <div className="product-container">
          <h1>Products</h1>
          {displayUi.map((product) => {
            return (
              <Product
                product={product}
                key={product.key}
                handelClick={handelClick}
              />
            );
          })}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link href="">
              <button>Review your order</button>
            </Link>
          </Cart>
        </div>
      </section>
    </>
  );
};

export default Shop;
