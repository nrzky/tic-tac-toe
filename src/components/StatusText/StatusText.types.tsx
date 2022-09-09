import { TextProps } from '@app/components/Text/Text.types';

export interface StatusTextProps extends TextProps {
  title: string;
  value: string | number;
  color?: string;
}

export interface StyledStatusValueProps {
  color?: string;
}
