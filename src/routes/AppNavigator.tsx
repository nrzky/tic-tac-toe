import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Welcome, Game } from '@app/views';

import { AppStackParamList } from './Routes.types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'simple_push' }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
