import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const Items = useSelector((state) => state.cartSlice.Items);
  console.log(Items);

  return <div>CartPage</div>;
};

export default CartPage;
