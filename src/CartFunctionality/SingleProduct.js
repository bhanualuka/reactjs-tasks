import React, { useEffect } from "react";
import "./SingleProduct.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSingleProduct } from "../reduxToolkit/slices/CartFunctionality/ApiSlice";
import { addItems } from "../reduxToolkit/slices/CartFunctionality/CartSlice";

const SingleProduct = () => {
  const dispatch = useDispatch();

  const sproduct = useSelector((state) => state.apiSlice.singleProduct);
  console.log(sproduct);

  const Items = useSelector((state) => state.cartSlice.Items);

  const { id } = useParams();
  console.log(id);

  // Setting Quantity logic

  const existingItem = Items.find((item) => item.id === sproduct.id);

  const quantity = existingItem ? existingItem.quantity : 0;

  const getSingleProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(res.data);

    dispatch(addSingleProduct(res.data));
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <div className="sproduct">
      <img src={sproduct.image} alt="fake-image" />
      <p className="price"> price: {sproduct.price} </p>

      <div className="buttons-plus-minus">
        <button
          className="inc"
          onClick={() => {
            if (quantity === 0) {
              dispatch(addItems(sproduct));
            } else {
              dispatch(addItems(sproduct));
            }
          }}
        >
          +
        </button>

        <p className="quantity"> quantity:{quantity} </p>

        <button className="dec">-</button>
      </div>

      <Link to={`/cart`}>
        <div className="goToCart">
          <button> GoToCart </button>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
