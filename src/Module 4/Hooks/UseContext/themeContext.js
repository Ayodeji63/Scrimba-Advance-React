import React, { useState } from "react";
const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme((prevState) => !prevState);
  };
  return (
    <ThemeContext.Provider value={{ theme: theme, toggle: toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
