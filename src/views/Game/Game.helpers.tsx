import { winnerResults } from './Game.constants';
import { GameStateType, GetBoardTitleColor } from './Game.types';

export const getBoardColors: GetBoardTitleColor = (params) => {
  const result: { backgroundColor: string; textColor: string } = {
    backgroundColor: params.colors.board,
    textColor: 'transparent',
  };

  if (params.type === 'X') {
    result.textColor = params.isFinished
      ? params.colors.white
      : params.colors.primary;
    result.backgroundColor = params.isFinished
      ? params.colors.primary
      : params.colors.board;
  }

  if (params.type === 'O') {
    result.textColor = params.isFinished
      ? params.colors.white
      : params.colors.secondary;
    result.backgroundColor = params.isFinished
      ? params.colors.secondary
      : params.colors.board;
  }

  return result;
};

export const checkGameResult = (gameState: GameStateType[]) => {
  const gameResult: { isFinished: boolean; winnerResult: number[] } = {
    isFinished: false,
    winnerResult: [],
  };

  winnerResults.forEach((result) => {
    const isResultFinished =
      gameState[result[0]] !== undefined &&
      gameState[result[0]] === gameState[result[1]] &&
      gameState[result[0]] === gameState[result[2]];

    if (isResultFinished) {
      gameResult.isFinished = true;
      gameResult.winnerResult = result;
      return;
    }
  });

  return gameResult;
};

export const checkIsFinished = (winnerResult: number[], index: number) => {
  const isFinished = winnerResult
    .find((resultItem) => resultItem === index)
    ?.toString();

  return isFinished ? true : false;
};
