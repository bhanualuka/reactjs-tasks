import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProducts, AddSearch } from "../reduxToolkit/slices/FakeApiSlice";
import "./ApiSearchFunctionality.css";

const SearchFunctionalityApi = () => {
  const dispatch = useDispatch();
  const SearchData = useSelector((store) => store?.fakeData);
  const { Products, Search } = SearchData;

  const handleSearch = (e) => {
    dispatch(AddSearch(e.target.value));
  };

  const HandleTopRated = () => {
    const filterdProducts = Products.filter((item) => {
      return item.rating.rate >= 4;
    });

    dispatch(AddProducts(filterdProducts));
  };

  const FetchingData = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();

      dispatch(AddProducts(json));
    } catch {}
  };

  useEffect(() => {
    FetchingData();
  }, []);

  return (
    <div>
      {/* Jai Sai master Jai Bapuji Maharaj */}
      {/* <button> Click Here To See Data </button> */}

      <input
        className="input-Search"
        type="text"
        placeholder="search here..."
        value={Search}
        onChange={(e) => {
          handleSearch(e);
        }}
      />

      <button onClick={HandleTopRated}> Top Rated </button>

      <div className="data-container">
        {Products &&
          Products.filter((item) =>
            item.title.toLowerCase().includes(Search.toLowerCase())
          ).map((item) => {
            return (
              <div key={item.id} className="Data-card">
                <img className="img" src={item.image} alt="FakeImage" />

                <h3> {item.title} </h3>
                <p>
                  <b>Price:{item.price} </b>
                </p>
                <p>
                  <b>Rating:{item.rating.rate} </b>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchFunctionalityApi;
