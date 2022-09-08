import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AppNavigator } from '@app/routes';
import { PrimaryTheme } from '@app/themes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
