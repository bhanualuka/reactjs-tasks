import React, { useEffect, useState } from "react";
import "./InputApiCall.css";
import Child from "./Child";

const Parent = () => {
  const [product, setProduct] = useState();
  const [id, setId] = useState(1);

  const FetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await res.json();
    setProduct(json);
    console.log(json);
  };

  const handleProduct = (inputId) => {
    setId(inputId);
  };

  useEffect(() => {
    FetchData();
  }, [id]);

  console.log(product);
  return (
    <div>
      {product ? (
        <div className="main-container">
          <div className="Data-card">
            {<img src={product.image} alt="fakeimage" />}
            <h5> {product.title} </h5>
            <p className="p"> Price: {product.price} </p>
          </div>
          <Child sendMessageToData={handleProduct} />
        </div>
      ) : (
        <h1> Loading...</h1>
      )}
    </div>
  );
};

export default Parent;
