import { TextProps as CoreTextProps } from 'react-native';

export interface TextProps extends CoreTextProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  font?: FontType;
}

export interface StyledTextProps {
  font: FontType;
}

export type FontType = 'Black' | 'Bold' | 'Medium' | 'Regular';
