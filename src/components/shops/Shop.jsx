import React, { useEffect, useState } from "react";
import Product from "../products/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const AddToCard = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
  };

  return (
    <div className="flex justify-between">
      <div className="shop-container w-3/4 grid  grid-cols-3 gap-10 m-10">
        {products.map((product) => (
            <Product product={product} AddToCard={AddToCard}></Product>
        ))}
      </div>
      <div className="card-container w-1/4 border">
        <h1 className="text-3xl text-center font-bold mt-5 text-orange-300">
          Select Your Item:{cart.length}
        </h1>
      </div>
    </div>
  );
};

export default Shop;
