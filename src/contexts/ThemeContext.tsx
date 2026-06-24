import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}