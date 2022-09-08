import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
