import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
