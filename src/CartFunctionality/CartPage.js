import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import {
  addItems,
  decrease,
  FincalPrice,
  removeItem,
} from "../reduxToolkit/slices/CartFunctionality/CartSlice";

const CartPage = () => {
  const { Items, finalPrice } = useSelector((state) => state.cartSlice);
  console.log(Items);
  const dispatch = useDispatch();

  return (
    <div className="parent-container">
      <div className="container-cart-card">
        {Items &&
          Items.map((item) => {
            const { image, title, id, price, totalPrice, quantity } = item;
            return (
              <div className="cart-card">
                <div className="image">
                  <img src={image} alt="fake-image" />
                </div>
                <div className="cart-price-div">
                  <p className="cart-price"> price: {Math.floor(price)}</p>
                </div>
                <div className="buttons-inc-dec">
                  <div className="plus-button">
                    <button
                      onClick={() => {
                        dispatch(addItems(item));
                        dispatch(
                          FincalPrice({ id: item.id, type: "increase" })
                        );
                      }}
                    >
                      +
                    </button>
                  </div>

                  <p className="cart-quantity"> {quantity} </p>
                  <div className="minus-button">
                    <button
                      onClick={() => {
                        dispatch(decrease(item));
                        dispatch(
                          FincalPrice({ id: item.id, type: "decrease" })
                        );
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="cart-total-price">
                  Total-Price: {Math.floor(totalPrice)}{" "}
                </div>
                <div
                  className="removeItem"
                  onClick={() => dispatch(removeItem(item))}
                >
                  <button> removeItem </button>
                </div>
              </div>
            );
          })}
        <div className="FinalPrice">
          <p> FinalPrice: {Math.floor(finalPrice)} </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
