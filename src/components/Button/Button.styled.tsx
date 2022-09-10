import styled from 'styled-components/native';

import { Touchable, Text } from '@app/components';

import { StyledButtonProps } from './Button.types';

export const StyledButton = styled(Touchable)<StyledButtonProps>((props) => ({
  height: 55,
  backgroundColor: props.disabled
    ? props.theme.colors.disabled
    : props.type === 'secondary'
    ? props.theme.colors.secondary
    : props.theme.colors.primary,
  paddingHorizontal: 20,
  borderRadius: 30,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledButtonTitle = styled(Text)((props) => ({
  fontSize: 20,
  color: props.theme.colors.white,
}));
