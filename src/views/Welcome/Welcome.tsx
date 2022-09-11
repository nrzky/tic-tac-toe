import * as React from 'react';

import { Button, Container } from '@app/components';

import styles, {
  StyledPrimaryText,
  StyledSecondaryText,
  StyledTitleContainer,
} from './Welcome.styled';
import { WelcomeProps } from './Welcome.types';

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <StyledTitleContainer>
        <StyledPrimaryText font="Black">X</StyledPrimaryText>
        <StyledSecondaryText font="Black">O</StyledSecondaryText>
      </StyledTitleContainer>
      <Button
        style={styles.button}
        type="primary"
        onPress={() => navigation.replace('Game')}
      >
        Play Game
      </Button>
      <Button style={styles.button} type="secondary">
        About
      </Button>
    </Container>
  );
};

export default Welcome;
