import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../reduxToolkit/slices/InputSlice";
import ChildRtk from "./ChildRtk";

const ParentRtk = () => {
  const { product, id } = useSelector((store) => store.InputApi);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await res.json();
    dispatch(updateProduct(json));
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      {product ? (
        <div className="Data-card">
          <img src={product.image} alt="fakeimage" />
          <h5> {product.title} </h5>
          <p> price: {product.price} </p>
        </div>
      ) : (
        <h1> Loading... </h1>
      )}

      <ChildRtk />
    </>
  );
};

export default ParentRtk;
