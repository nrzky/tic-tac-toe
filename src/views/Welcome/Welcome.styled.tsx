import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

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
  position: 'absolute',
  top: 100,
  textAlign: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 100,
});

export const StyledPrimaryText = styled(Text)((props) => ({
  fontSize: 100,
  textAlign: 'start',
  color: props.theme.colors.primary,
  marginHorizontal: 5,
}));

export const StyledSecondaryText = styled(Text)((props) => ({
  fontSize: 100,
  textAlign: 'center',
  color: props.theme.colors.secondary,
  marginHorizontal: 5,
}));
