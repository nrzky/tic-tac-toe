import * as React from 'react';
import {
  StyledStatusContainer,
  StyledStatusTitle,
  StyledStatusValue,
} from './StatusText.styled';
import { StatusTextProps } from './StatusText.types';

const StatusText: React.FC<StatusTextProps> = ({
  title,
  value,
  color,
  isCurrentPlayer = false,
  playerColor,
  ...props
}) => {
  return (
    <StyledStatusContainer {...props}>
      <StyledStatusTitle
        isCurrentPlayer={isCurrentPlayer}
        playerColor={playerColor}
        font="Bold"
      >
        {title}
      </StyledStatusTitle>
      <StyledStatusValue font="Black" color={color}>
        {value}
      </StyledStatusValue>
    </StyledStatusContainer>
  );
};

export default StatusText;
