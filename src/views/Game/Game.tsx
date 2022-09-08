import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View, Text } from '@app/components';

const Game: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Game Page!</Text>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
