import { Animated, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const StyledTouchable = styled(AnimatedTouchable)({});
