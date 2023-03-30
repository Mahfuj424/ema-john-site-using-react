import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);

  let totalPrice = 0;
  let totalShipping = 0;
  let totalQuantity = 0;
  for (let product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price + product.quantity * product.quantity;
    totalShipping = totalShipping + product.shipping;
    totalQuantity = totalQuantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="sticky top-0 bg-orange-200 w-full h-96 rounded-lg hover:bg-orange-300">
      <h1 className="text-3xl ps-10 pt-5 font-bold text-black">
        Order Summary
      </h1>
      <div className="mt-10 text-xl text-black font-bold ms-12">
        <h2>Selected Items: {totalQuantity} </h2>
        <h2 className="my-3">Total Price:$ {totalPrice} </h2>
        <h2 className="my-3">Total Shipping Charge: ${totalShipping}</h2>
        <h2>Tax: ${tax} </h2>
        <h2 className="mt-10 text-black text-2xl font-bold">
          Grand Total: $ {grandTotal}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
