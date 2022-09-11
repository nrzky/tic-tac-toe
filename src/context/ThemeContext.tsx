import * as React from 'react';
import { Appearance } from 'react-native';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';

import { DarkTheme, PrimaryTheme } from '@app/themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextValue {
  isDarkTheme: boolean;
  setDarkTheme: (currentValue: boolean) => void;
}

const ThemeContext = React.createContext({} as ThemeContextValue);

export const useChangeTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = React.useState<boolean>(
    Appearance.getColorScheme() === 'dark'
  );

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme: isDarkTheme, setDarkTheme: setDarkTheme }}
    >
      <SCThemeProvider theme={isDarkTheme ? DarkTheme : PrimaryTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};
