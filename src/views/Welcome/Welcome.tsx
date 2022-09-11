import * as React from 'react';
import { Linking } from 'react-native';

import { Button, Container } from '@app/components';

import styles, {
  StyledButtonContainer,
  StyledPrimaryText,
  StyledSecondaryText,
  StyledTitleContainer,
} from './Welcome.styled';
import { WelcomeProps } from './Welcome.types';

const Welcome: React.FC<WelcomeProps> = ({ navigation }) => {
  const handleLinkAbout = React.useCallback(() => {
    Linking.openURL('https://www.github.com/nrzky');
  }, []);

  return (
    <Container style={styles.container}>
      <StyledTitleContainer>
        <StyledPrimaryText font="Black">Tic</StyledPrimaryText>
        <StyledSecondaryText font="Black">Tac</StyledSecondaryText>
        <StyledPrimaryText font="Black">Toe</StyledPrimaryText>
      </StyledTitleContainer>
      <StyledButtonContainer>
        <Button
          style={styles.button}
          type="primary"
          onPress={() => navigation.replace('Game')}
        >
          Play Game
        </Button>
        <Button
          style={styles.button}
          type="secondary"
          onPress={handleLinkAbout}
        >
          About
        </Button>
      </StyledButtonContainer>
    </Container>
  );
};

export default Welcome;
