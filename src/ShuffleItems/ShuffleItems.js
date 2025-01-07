import React, { useState } from "react";

const ShuffleItems = () => {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Guava",
  ]);

  const handleShuffle = () => {
    const ShuffledItems = [...items];

    for (let i = 0; i < ShuffledItems.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));

      [ShuffledItems[i], ShuffledItems[j]] = [
        ShuffledItems[j],
        ShuffledItems[i],
      ];
    }

    setItems(ShuffledItems);
  };

  return (
    <>
      <h1>list of Items </h1>
      <ul>
        {items.map((ele, index) => {
          return <li key={index}> {ele} </li>;
        })}
      </ul>

      <button onClick={handleShuffle}> ShuffleItems </button>
    </>
  );
};

export default ShuffleItems;
