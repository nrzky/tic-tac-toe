import * as React from 'react';

import { StyledButton, StyledButtonTitle } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'primary',
  ...props
}) => {
  return (
    <StyledButton type={type} {...props}>
      <StyledButtonTitle font="Bold">{children}</StyledButtonTitle>
    </StyledButton>
  );
};

export default Button;
