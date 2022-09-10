import * as React from 'react';

import { Button, Container } from '@app/components';

import styles, {
  StyledButtonContainer,
  StyledGameContainer,
  StyledGameContent,
} from './Game.styled';
import { BoardType, GameStateType, GameStatus } from './Game.types';
import {
  checkGameResult,
  checkIsFinished,
  checkFirstRound,
} from './Game.helpers';

import Board from './Board';
import GameStatusBar from './GameStatusBar';

const Game: React.FC = () => {
  const [status, setStatus] = React.useState<GameStatus>({
    round: 1,
    playerX: 0,
    playerO: 0,
  });
  const [playerType, setPlayerType] = React.useState<BoardType>('X');
  const [gameState, setGameState] = React.useState<GameStateType[]>(
    [...Array(9)].map(() => undefined)
  );

  const gameResult = React.useMemo(() => {
    return checkGameResult(gameState);
  }, [gameState]);

  const handleRestartGame = React.useCallback(() => {
    setPlayerType('X');
    setGameState([...Array(9)].map(() => undefined));

    if (gameResult.isFinished) {
      setStatus((currentStatus) => ({
        ...currentStatus,
        round: currentStatus.round + 1,
      }));
    }
  }, [gameResult.isFinished]);

  const handleResetGame = React.useCallback(() => {
    setPlayerType('X');
    setGameState([...Array(9)].map(() => undefined));
    setStatus({
      round: 1,
      playerX: 0,
      playerO: 0,
    });
  }, []);

  const handlePressItem = React.useCallback(
    (index: number) => {
      setGameState((currentGameState: GameStateType[]) => {
        return currentGameState.map((item, boardIndex) => {
          if (typeof item === 'string') {
            return item;
          }

          if (boardIndex === index) {
            setPlayerType((currentPlayerType) =>
              currentPlayerType === 'X' ? 'O' : 'X'
            );

            return playerType;
          }

          return item;
        });
      });
    },
    [playerType]
  );

  React.useEffect(() => {
    if (gameResult.isFinished) {
      setStatus((currentStatus) => {
        const newStatus = currentStatus;

        if (gameResult.hasWinner) {
          gameResult.winnerPlayerType === 'X'
            ? (newStatus.playerX = currentStatus.playerX + 1)
            : (newStatus.playerO = currentStatus.playerO + 1);
        }

        return { ...newStatus };
      });
    }
  }, [
    gameResult.hasWinner,
    gameResult.isFinished,
    gameResult.winnerPlayerType,
    handleRestartGame,
  ]);

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
        <Button
          style={styles.primaryButton}
          disabled={checkFirstRound(gameState)}
          onPress={handleRestartGame}
        >
          {gameResult.isFinished ? 'Start Game' : 'Restart'}
        </Button>
        <Button
          style={styles.secondaryButton}
          type="secondary"
          onPress={handleResetGame}
        >
          Reset Game
        </Button>
      </StyledButtonContainer>
    </Container>
  );
};

export default Game;
