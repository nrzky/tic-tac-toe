import { ViewProps as CoreViewProps } from 'react-native';

export interface ViewProps extends CoreViewProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}
