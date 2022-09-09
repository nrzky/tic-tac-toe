import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Container } from '@app/components';

import { StyledButtonContainer, StyledGameContainer } from './Game.styled';
import Board from './Board';
import { BoardType, GameStateType } from './Game.types';

const Game: React.FC = () => {
  const [playerType, setPlayerType] = React.useState<BoardType>('X');
  const [gameState, setGameState] = React.useState<GameStateType[]>(
    [...Array(9)].map(() => undefined)
  );

  const handlePressItem = React.useCallback(
    (index: number) => {
      setGameState((currentGameState: GameStateType[]) => {
        return currentGameState.map((board, boardIndex) => {
          if (typeof board === 'string') {
            return board;
          }

          if (boardIndex === index) {
            setPlayerType((currentPlayerType) =>
              currentPlayerType === 'X' ? 'O' : 'X'
            );

            return playerType;
          }

          return board;
        });
      });
    },
    [playerType]
  );

  return (
    <Container style={styles.container}>
      <StyledGameContainer>
        {gameState.map((item: GameStateType, index: number) => (
          <Board
            key={index.toString()}
            type={item}
            isFinished={(() => {
              let count = 0;

              gameState.forEach((board) => {
                if (typeof board === 'string') {
                  count++;
                }
              });

              return count === 5 && item === 'X';
            })()}
            onPress={() => handlePressItem(index)}
          />
        ))}
      </StyledGameContainer>
      <StyledButtonContainer>
        <Button style={styles.button}>New Game</Button>
        <Button style={styles.button} type="secondary">
          Quit Game
        </Button>
      </StyledButtonContainer>
    </Container>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
  },
});
