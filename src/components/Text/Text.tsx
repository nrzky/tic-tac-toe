import * as React from 'react';

import { StyledText } from './Text.styled';
import { TextProps } from './Text.types';

const Text: React.FC<TextProps> = ({ font = 'Regular', ...props }) => (
  <StyledText font={font} {...props} />
);

export default Text;
