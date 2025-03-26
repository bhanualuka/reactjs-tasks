import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApiProducts } from "../reduxToolkit/slices/CartFunctionality/ApiSlice";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.apiSlice.products);
  console.log(products);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch(addApiProducts(res.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="card-container">
      {products.map((Item) => {
        return (
          <Link to={`product/${Item.id}`} key={Item.id}>
            <div className="card-Item">
              <img src={Item.image} alt="Fake-image" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
