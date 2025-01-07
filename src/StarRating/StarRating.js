import "./StarRating.css";
import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

export const StarRating = () => {
  const [Rating, setRating] = useState(0);

  const limit = 5;

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <React.Fragment>
      jai sai master jai bapuji maharaj
      {[...Array(limit)].map((_, index) => {
        return (
          <React.Fragment key={index}>
            <span
              className={index < Rating ? " star style " : "star"}
              onClick={() => {
                handleClick(index);
              }}
            >
              {index < Rating ? <IoIosStar /> : <IoIosStarOutline />}
            </span>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};
