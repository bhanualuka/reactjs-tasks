import { useDispatch } from "react-redux";
import { AddProducts } from "../../reduxToolkit/slices/FakeApiSlice";
import { useEffect } from "react";

export const useApiFetchingData = () => {
  const dispatch = useDispatch();

  const FetchingApiData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();

      dispatch(AddProducts(json));
    } catch (error) {
      console.log("Something went Wrong");
    }
  };

  useEffect(() => {
    FetchingApiData();
  }, []);
};
