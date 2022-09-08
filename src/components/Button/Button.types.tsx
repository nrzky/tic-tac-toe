import { TouchableProps } from '@app/components/Touchable/Touchable.types';

export interface ButtonProps extends TouchableProps {
  children: string;
  type?: ButtonType;
}

export interface StyledButtonProps {
  type: ButtonType;
}

export type ButtonType = 'primary' | 'secondary';
