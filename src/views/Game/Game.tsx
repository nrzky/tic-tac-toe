import * as React from 'react';

import { Button, Container } from '@app/components';

import styles, {
  StyledButtonContainer,
  StyledGameContainer,
  StyledGameContent,
} from './Game.styled';
import { BoardType, GameStateType, GameStatus } from './Game.types';
import { checkGameResult, checkIsFinished } from './Game.helpers';

import Board from './Board';
import GameStatusBar from './GameStatusBar';

const Game: React.FC = () => {
  const [playerType, setPlayerType] = React.useState<BoardType>('X');
  const [gameState, setGameState] = React.useState<GameStateType[]>(
    [...Array(9)].map(() => undefined)
  );

  const [status, setStatus] = React.useState<GameStatus>({
    round: 0,
    playerX: 0,
    playerO: 0,
  });

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

  React.useEffect(() => {
    if (gameResult.isFinished) {
      const winnerPlayerType = playerType === 'X' ? 'playerO' : 'playerX';

      setStatus((currentStatus) => ({
        ...currentStatus,
        [winnerPlayerType]: currentStatus[winnerPlayerType] + 1,
        round: currentStatus.round + 1,
      }));
    }
  }, [gameResult.isFinished, playerType]);

  return (
    <Container style={styles.container}>
      <GameStatusBar status={status} />
      <StyledGameContainer>
        <StyledGameContent>
          {gameState.map((item: GameStateType, index: number) => (
            <Board
              key={index.toString()}
              type={item}
              disabled={gameResult.isFinished}
              isFinished={checkIsFinished(gameResult.winnerResult, index)}
              onPress={() => handlePressItem(index)}
            />
          ))}
        </StyledGameContent>
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
