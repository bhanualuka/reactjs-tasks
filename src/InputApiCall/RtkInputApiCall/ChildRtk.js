import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateId, updateSearch } from "../../reduxToolkit/slices/InputSlice";

const ChildRtk = () => {
  const { search, id } = useSelector((store) => store.InputApi);
  const dispatch = useDispatch();

  console.log(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateId(search));
    dispatch(updateSearch(""));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            dispatch(updateSearch(e.target.value));
          }}
        />

        <button type="submit"> submit </button>
      </form>
    </div>
  );
};

export default ChildRtk;
