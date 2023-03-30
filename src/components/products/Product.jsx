import React from "react";
import "./product.css";

const Product = ({ product, AddToCard }) => {
  const { img, price, name, seller, ratings } = product;
  // console.log(product);
  return (
    <div className="h-[580px] border rounded-lg shadow-lg product  ">
      <img className="p-3" src={img ? img : "image not found"} alt="show" />
      <div className="p-3 mt-3 product-info">
        <h1 className="text-xl">{name}</h1>
        <h2 className="text-xl font-bold mt-2">Price: ${price}</h2>
        <h4 className="text-lg mt-3">Manufacturer: {seller}</h4>
        <h4 className="mt-3">Rating: {ratings} Stars</h4>
      </div>
      <button
        onClick={() => AddToCard(product)}
        className="btn btn-card bg-orange-200 text-black"
        id="btn-card"
      >
        Add To Card
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
        </svg>
      </button>
    </div>
  );
};

export default Product;
