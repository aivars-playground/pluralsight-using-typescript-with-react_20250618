"use client";
import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  darkTheme: boolean | undefined;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  toggleTheme: () => {},
});

type ThemeProviderProps = { children: React.ReactNode };

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean | undefined>();
  const toggleTheme = () => setDarkTheme(!darkTheme);
  const value = { darkTheme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
