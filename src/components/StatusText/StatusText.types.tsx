import { TextProps } from '@app/components/Text/Text.types';

export interface StatusTextProps extends TextProps {
  title: string;
  value: string | number;
  color?: string;
  isCurrentPlayer?: boolean;
  playerColor?: string;
}

export interface StyledStatusTitleProps {
  isCurrentPlayer: boolean;
  playerColor?: string;
}
export interface StyledStatusValueProps {
  color?: string;
}
