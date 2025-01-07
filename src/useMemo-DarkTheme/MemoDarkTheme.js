import React from "react";
import { useContext, useMemo, useState } from "react";
import { ThemeContext } from "./Context";

export const MemoDarkTheme = () => {
  const [count, setCount] = useState(0);
  const { isDarkTheme, toogleTheme } = useContext(ThemeContext);

  /*  USING NORMAL FUNCGTION
  const ThemeStyles = () => {
    console.log("from Normal Functionn");
    return {
      width: "100vw",
      height: "100vh",
      backgroundColor: isDarkTheme ? "black" : "white",
      color: isDarkTheme ? "white" : "black",
    };
  }; */

  /*  const ToogleTheme = () => {
    setDarkTheme((prev) => !prev);
  }; */

  const ThemeStyles = useMemo(() => {
    console.log("rendering from useMemo");
    return {
      width: "100vw",
      height: "100vh",
      backgroundColor: isDarkTheme ? "black" : "white",
      color: isDarkTheme ? "white" : "black",
    };
  }, [isDarkTheme]);

  return (
    <div style={ThemeStyles}>
      jai sai master jai bapuji maharaj
      <h1> InlineStyle using object </h1>
      <button
        onClick={toogleTheme}
        style={{
          width: "100px",
          height: "50px",
          fontSize: "15px",
          borderRadius: "8px",
          cursor: "pointer",
          border: isDarkTheme ? "3px solid darkgreen" : "3px solid black",
        }}
      >
        {isDarkTheme ? "Click for  WhiteTheme" : " Click for DarkTheme"}
      </button>
      <button
        onClick={() => {
          console.log("Count.. " + count);
          setCount((prev) => prev + 1);
        }}
        style={{
          width: "100px",
          height: "50px",
          fontSize: "15px",
          borderRadius: "8px",
          cursor: "pointer",
          color: "blue",
          border: "3px solid yellow",
        }}
      >
        Testing
      </button>
      <h1 style={{ color: "blue" }}> Count: {count} </h1>
    </div>
  );
};
