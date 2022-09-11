import * as React from 'react';
import { LogBox, Appearance } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { AppNavigator } from '@app/routes';
import { DarkTheme, PrimaryTheme } from '@app/themes';

LogBox.ignoreLogs(['Require cycle:']);

const App: React.FC = () => {
  const [isDarkTheme] = React.useState(Appearance.getColorScheme() === 'dark');

  const [isFontsLoaded] = useFonts({
    'Montserrat-Black': require('./src/assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./src/assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : PrimaryTheme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
