import { TouchableOpacityProps } from 'react-native';

export interface TouchableProps extends TouchableOpacityProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}
