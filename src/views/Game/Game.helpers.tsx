import { GetBoardTitleColor } from './Game.types';

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
