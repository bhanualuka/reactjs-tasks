import React from "react";
import { useSelector } from "react-redux";
import "./CartPage.css";

const CartPage = () => {
  const Items = useSelector((state) => state.cartSlice.Items);
  console.log(Items);

  return (
    <div className="container-cart-card">
      {Items.map((item) => {
        const { image, title, id, price, quantity } = item;
        return (
          <div className="cart-card">
            <img src={image} alt="fake-image" />

            <div className="buttons-inc-dec">
              <button> +</button>
              <p className="cart-quantity"> {quantity} </p>
              <button> - </button>
            </div>
            <div className="removeItem">
              <button> removeItem </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
