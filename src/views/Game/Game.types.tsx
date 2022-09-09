import { DefaultTheme } from 'styled-components/native';

import { TouchableProps } from '@app/components/Touchable/Touchable.types';

export interface BoardProps extends TouchableProps {
  type?: BoardType;
  isFinished: boolean;
}

export type BoardType = 'X' | 'O';

export interface StyledBoardContainerProps {
  type?: BoardType;
  isFinished: boolean;
}

export interface StyledBoardTitleProps {
  type?: BoardType;
  isFinished: boolean;
}

export type GetBoardTitleColor = (params: {
  type?: BoardType;
  isFinished: boolean;
  colors: DefaultTheme['colors'];
}) => { backgroundColor: string; textColor: string };

export type GameStateType = BoardType | undefined;
