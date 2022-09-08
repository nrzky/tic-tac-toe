import * as React from 'react';

import { StyledView } from './View.styled';
import { ViewProps } from './View.types';

const View: React.FC<ViewProps> = (props) => <StyledView {...props} />;

export default View;
