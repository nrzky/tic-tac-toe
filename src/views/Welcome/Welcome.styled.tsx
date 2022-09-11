import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import ThemeSwitch from 'expo-dark-mode-switch';

import { View, Text } from '@app/components';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    marginTop: 10,
  },
});

export const StyledTitleContainer = styled(View)({
  textAlign: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 100,
});

export const StyledButtonContainer = styled(View)({
  position: 'absolute',
  bottom: 150,
  left: 0,
  right: 0,
  justifyContent: 'center',
});

export const StyledPrimaryText = styled(Text)((props) => ({
  fontSize: 50,
  textAlign: 'start',
  color: props.theme.colors.primary,
  marginHorizontal: 5,
}));

export const StyledSecondaryText = styled(Text)((props) => ({
  fontSize: 50,
  textAlign: 'center',
  color: props.theme.colors.secondary,
  marginHorizontal: 10,
}));

export const StyledThemeSwitch = styled(ThemeSwitch)({
  position: 'absolute',
  top: 60,
  alignSelf: 'center',
});
