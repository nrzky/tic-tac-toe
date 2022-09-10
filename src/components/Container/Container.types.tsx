import { ViewProps } from '@app/components/View/View.types';

export interface ContainerProps extends ViewProps {}

export interface StyledContainerProps {
  safeAreaInsets: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}
