import * as React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';

import { AppNavigator } from '@app/routes';
import { DarkTheme } from '@app/themes';

LogBox.ignoreLogs(['Require cycle:']);

const App: React.FC = () => {
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
    <ThemeProvider theme={DarkTheme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
