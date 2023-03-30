import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../products/Product";
import { addToDb, getShoppingCart } from "../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
      const storedCart = getShoppingCart();
      const savedCart = [];
    //   step 1: get id of the addedProduct
      for (const id in storedCart) {
        // step 2: get product form the products state using id
      const addedProduct = products.find((product) => product.id === id);
          if (addedProduct) {
        //   step 3: add quantity
        const quantity = storedCart[id];
              addedProduct.quantity = quantity;
            //   step 4: add the added product to the saved cart
          savedCart.push(addedProduct)
      }
      }
    //   step 5: set the cart
      setCart(savedCart)
  }, [products]);

  const AddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="flex justify-between">
      <div className="shop-container w-3/4 grid  grid-cols-3 gap-10 m-10">
        {products.map((product) => (
          <Product
            product={product}
            AddToCard={AddToCard}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="card-container w-1/4">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
