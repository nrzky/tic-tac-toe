import { DefaultTheme } from 'styled-components/native';

import { AppStackScreenProps } from '@app/routes';
import { TouchableProps } from '@app/components/Touchable/Touchable.types';
import { ViewProps } from '@app/components/View/View.types';

export type GameProps = AppStackScreenProps<'Game'>;

export interface BoardProps extends TouchableProps {
  type?: BoardType;
  isWinner: boolean;
  isFinished: boolean;
}

export type BoardType = 'X' | 'O';

export interface StyledBoardContainerProps {
  type?: BoardType;
  isWinner: boolean;
  isFinished: boolean;
}

export interface StyledBoardTitleProps {
  type?: BoardType;
  isWinner: boolean;
  isFinished: boolean;
}

export type GetBoardTitleColor = (params: {
  type?: BoardType;
  isWinner: boolean;
  isFinished: boolean;
  colors: DefaultTheme['colors'];
}) => { backgroundColor: string; textColor: string };

export type GameStateType = BoardType | undefined;

export interface GameStatusBarProps extends ViewProps {
  status: GameStatus;
  currentPlayer?: BoardType;
}

export interface GameStatus {
  round: number;
  playerX: number;
  playerO: number;
}
