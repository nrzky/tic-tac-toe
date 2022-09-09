import styled from 'styled-components/native';

import { View, Text } from '@app/components';
import { StyledStatusValueProps } from './StatusText.types';

export const StyledStatusContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledStatusTitle = styled(Text)((props) => ({
  fontSize: 14,
  color: props.theme.colors.subtitle,
  textAlign: 'center',
  marginBottom: 10,
}));

export const StyledStatusValue = styled(Text)<StyledStatusValueProps>(
  (props) => ({
    fontSize: 36,
    textAlign: 'center',
    color: props.color,
  })
);
