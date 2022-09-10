import * as React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StyledContainer } from './Container.styled';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = (props) => {
  const insets = useSafeAreaInsets();

  return <StyledContainer safeAreaInsets={insets} {...props} />;
};

export default Container;
