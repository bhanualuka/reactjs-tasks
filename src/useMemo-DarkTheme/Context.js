import { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toogleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      toogleTheme();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
