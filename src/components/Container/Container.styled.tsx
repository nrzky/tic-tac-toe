import styled from 'styled-components/native';

import { View } from '@app/components';

import { StyledContainerProps } from './Container.types';

export const StyledContainer = styled(View)<StyledContainerProps>((props) => ({
  flex: 1,
  backgroundColor: props.theme.colors.background,
  paddingTop: props.safeAreaInsets.top,
  paddingBottom: props.safeAreaInsets.bottom,
  paddingLeft: props.safeAreaInsets.left,
  paddingRight: props.safeAreaInsets.right,
}));
