import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utility/fakedb";
import Cart from "../Cart/Cart";
import Header from "../Header/header";
import CheckoutProduct from "../checkout/checkout";

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

  let handleClick = (product) => {
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

  const handleSearch = (event) => {
    let myKeyWord = event.target.value;
    let newSearch = products.filter((product) =>
      product.name.trim().toLowerCase().includes(myKeyWord.trim().toLowerCase())
    );
    setDisplayUi(newSearch);
  };

  let totalLength = 0;
  let total = 0;
  for (let product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    total = (total + product.price) * product.quantity;
    totalLength = totalLength + product.quantity;
  }

  return (
    <>
      <Header onChange={handleSearch} totalLength={totalLength} />
      
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 mt-2 shadow-sm">
          <img src="/checkout_banner.png" width={1020} height={250} />

          <div className="flex flex-col p-1 space-y-10 bg-white  ">
            <h1 className="text-xxl border-b p-2 pl-1 font-bold">
              {totalLength == 0
                ? "Your Amazon Basket is empty"
                : "Your Shopping Basket"}
            </h1>

            <div className="pl-9 pr-9 ">
              {displayUi.map((product, i) => (
                <CheckoutProduct
                  product={product}
                  key={product.key}
                  handleClick={handleClick}
                  hasPrime={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col mt-5 bg-white p-10 pt-8 shadow-md">
          <Cart cart={cart} />
        </div>
      </main>
    </>
  );
};

export default Shop;
