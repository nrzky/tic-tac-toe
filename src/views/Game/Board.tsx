import * as React from 'react';

import { StyledBoardContainer, StyledBoardTitle } from './Game.styled';
import { BoardProps } from './Game.types';

const Board: React.FC<BoardProps> = ({
  type,
  isWinner = false,
  isFinished,
  ...props
}) => {
  return (
    <StyledBoardContainer
      {...props}
      type={type}
      isWinner={isWinner}
      isFinished={isFinished}
    >
      <StyledBoardTitle
        isFinished={isFinished}
        type={type}
        isWinner={isWinner}
        font="Black"
      >
        {type}
      </StyledBoardTitle>
    </StyledBoardContainer>
  );
};

export default Board;
