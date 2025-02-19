import React, { useEffect, useState } from "react";
import "./Pagination.css";
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const json = await res.json();
    console.log(json.products);
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSinglePage = (singlePage) => {
    if (singlePage >= 1 && singlePage <= products.length / 10) {
      setPage(singlePage);
    }
  };

  return (
    <>
      <div className="Pagination_container">
        {products.slice(page * 10 - 10, page * 10).map((item) => {
          return (
            <div className="card" key={item.id}>
              <img src={item.images[0]} alt="product-image" />
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <span
          className="sideButtons"
          onClick={() => handleSinglePage(page - 1)}
        >
          {" "}
          ◀️{" "}
        </span>
        {[...Array(products.length / 10)].map((item, ind) => {
          return (
            <span
              id="single_page"
              className={page === ind + 1 ? "singlePage" : ""}
              onClick={() => handleSinglePage(ind + 1)}
            >
              {ind + 1}
            </span>
          );
        })}

        <span
          className="sideButtons"
          onClick={() => handleSinglePage(page + 1)}
        >
          ▶️
        </span>
      </div>
    </>
  );
};

export default Pagination;
