import React from "react";
import "./product.css"

const Product = ({ product, AddToCard }) => {
  const { img, price, name, seller, ratings } = product;
  // console.log(product);
  return (
    <div className="h-[580px] border rounded-lg shadow-lg product">
      <img className="p-3" src={img ? img : "image not found"} alt="show" />
      <div className="p-3 mt-3 product-info">
        <h1 className="text-xl">{name}</h1>
        <h2 className="text-xl font-bold mt-2">Price: ${price}</h2>
        <h4 className="text-lg mt-3">Manufacturer: {seller}</h4>
        <h4 className="mt-3">Rating: {ratings} Stars</h4>
      </div>
        <button onClick={()=>AddToCard(product)} className="btn btn-card bg-orange-300">Add To Card </button>
    </div>
  );
};

export default Product;
