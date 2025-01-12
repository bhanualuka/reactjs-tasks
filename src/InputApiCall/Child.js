import React, { useState } from "react";

const Child = ({ sendMessageToData }) => {
  const [searchData, setSearchData] = useState("");

  const handleSubmit = () => {
    // e.preventDefault();
    sendMessageToData(searchData);
    setSearchData("");
  };

  /* const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageToData(searchData);
    setSearchData("");
  }; */

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        type="text"
        placeholder="Search.."
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
          // handleSearch(e);
        }}
      />
      <button onClick={handleSubmit}> Submit </button>
      {/* </form> */}
    </div>
  );
};

export default Child;
