import * as React from 'react';

import { StyledContainer } from './Container.styled';
import { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = (props) => (
  <StyledContainer {...props} />
);

export default Container;
