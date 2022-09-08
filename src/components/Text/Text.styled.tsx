import styled from 'styled-components/native';

import { StyledTextProps } from './Text.types';

export const StyledText = styled.Text<StyledTextProps>((props) => ({
  fontFamily: 'Montserrat-' + props.font,
  fontSize: 30,
  color: props.theme.colors.title,
}));
