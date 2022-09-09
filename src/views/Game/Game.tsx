import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Container } from '@app/components';

import { StyledButtonContainer, StyledGameContainer } from './Game.styled';
import Board from './Board';
import { BoardType, GameStateType } from './Game.types';
import { checkGameResult, checkIsFinished } from './Game.helpers';

const Game: React.FC = () => {
  const [playerType, setPlayerType] = React.useState<BoardType>('X');
  const [gameState, setGameState] = React.useState<GameStateType[]>(
    [...Array(9)].map(() => undefined)
  );

  const handleRestartGame = React.useCallback(() => {
    setPlayerType('X');
    setGameState([...Array(9)].map(() => undefined));
  }, []);

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

  const gameResult = React.useMemo(() => {
    return checkGameResult(gameState);
  }, [gameState]);

  return (
    <Container style={styles.container}>
      <StyledGameContainer>
        {gameState.map((item: GameStateType, index: number) => (
          <Board
            key={index.toString()}
            type={item}
            disabled={gameResult.isFinished}
            isFinished={checkIsFinished(gameResult.winnerResult, index)}
            onPress={() => handlePressItem(index)}
          />
        ))}
      </StyledGameContainer>
      <StyledButtonContainer>
        <Button style={styles.button} onPress={handleRestartGame}>
          New Game
        </Button>
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
