import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Container, Text, Touchable } from '@app/components';

const Game: React.FC = () => {
  return (
    <Container style={styles.container}>
      <Touchable>
        <Text font="Black">Game Page!</Text>
      </Touchable>
    </Container>
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
