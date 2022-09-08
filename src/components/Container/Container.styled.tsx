import styled from 'styled-components/native';
import View from '../View/View';

export const StyledContainer = styled(View)((props) => ({
  flex: 1,
  backgroundColor: props.theme.colors.background,
}));
