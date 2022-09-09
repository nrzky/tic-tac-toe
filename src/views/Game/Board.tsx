import * as React from 'react';

import { StyledBoardContainer, StyledBoardTitle } from './Game.styled';
import { BoardProps } from './Game.types';

const Board: React.FC<BoardProps> = ({
  style,
  type,
  isFinished = false,
  ...props
}) => {
  return (
    <StyledBoardContainer
      {...props}
      style={[style]}
      type={type}
      isFinished={isFinished}
    >
      <StyledBoardTitle type={type} isFinished={isFinished} font="Black">
        {type}
      </StyledBoardTitle>
    </StyledBoardContainer>
  );
};

export default Board;
