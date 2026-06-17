import React, {
  createContext,
  useContext,
} from "react";

export interface Theme {
  primary: string;
  background: string;
}

const ThemeContext =
  createContext<Theme | null>(null);

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider = ({
  theme,
  children,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme =
    useContext(ThemeContext);

  if (!theme) {
    throw new Error(
      "ThemeProvider missing"
    );
  }

  return theme;
};