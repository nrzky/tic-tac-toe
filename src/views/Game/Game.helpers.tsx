import { winnerResults } from './Game.constants';
import { BoardType, GameStateType, GetBoardTitleColor } from './Game.types';

export const getBoardColors: GetBoardTitleColor = (params) => {
  const result: { backgroundColor: string; textColor: string } = {
    backgroundColor: params.colors.board,
    textColor: 'transparent',
  };

  if (params.type === 'X') {
    result.textColor = params.isWinner
      ? params.colors.white
      : params.isFinished
      ? params.colors.disabled
      : params.colors.primary;
    result.backgroundColor = params.isWinner
      ? params.colors.primary
      : params.colors.board;
  }

  if (params.type === 'O') {
    result.textColor = params.isWinner
      ? params.colors.white
      : params.isFinished
      ? params.colors.disabled
      : params.colors.secondary;
    result.backgroundColor = params.isWinner
      ? params.colors.secondary
      : params.colors.board;
  }

  return result;
};

export const checkFirstRound = (gameState: GameStateType[]) => {
  return !gameState.some((state) => typeof state === 'string');
};

export const checkLastRound = (gameState: GameStateType[]) => {
  return !gameState.some((state) => state === undefined);
};

export const checkGameResult = (gameState: GameStateType[]) => {
  const gameResult: {
    isFinished: boolean;
    hasWinner: boolean;
    winnerResult: number[];
    winnerPlayerType: undefined | BoardType;
  } = {
    isFinished: false,
    hasWinner: false,
    winnerResult: [],
    winnerPlayerType: undefined,
  };

  winnerResults.forEach((result) => {
    const isResultFinished =
      gameState[result[0]] !== undefined &&
      gameState[result[0]] === gameState[result[1]] &&
      gameState[result[0]] === gameState[result[2]];

    if (isResultFinished) {
      gameResult.isFinished = true;
      gameResult.hasWinner = true;
      gameResult.winnerResult = result;
      gameResult.winnerPlayerType = gameState[result[0]];

      return;
    }
  });

  if (checkLastRound(gameState)) {
    gameResult.isFinished = true;
  }

  return gameResult;
};

export const checkIsWinnerBoard = (winnerResult: number[], index: number) => {
  const isWinner = winnerResult
    .find((resultItem) => resultItem === index)
    ?.toString();

  return isWinner ? true : false;
};
