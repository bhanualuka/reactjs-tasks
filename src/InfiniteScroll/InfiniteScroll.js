import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );

    const json = await res.json();
    console.log(json);
    setData((prev) => [...prev, ...json]);
    // setData(json);
  };

  const handleScroller = () => {
    console.log("window_innerHeight", window.innerHeight);
    console.log("ScroolHeight", document.documentElement.scrollHeight);
    console.log("ScrollTop", document.documentElement.scrollTop);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroller);
    return () => window.removeEventListener("scroll", handleScroller);
  }, []);

  return (
    <>
      <div className="infiniteContainer">
        {data.map((item) => {
          return (
            <div className="infiniteCard" key={item.id}>
              <h3> {item.id} </h3>
              <p className="p"> {item.title} </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InfiniteScroll;
