import * as React from 'react';
import { Animated, GestureResponderEvent } from 'react-native';

import { StyledTouchable } from './Touchable.styled';
import { ANIMATED_DURATION } from './Touchable.constants';
import { TouchableProps } from './Touchable.types';

const Touchable: React.FC<TouchableProps> = ({
  style,
  onPressIn,
  onPressOut,
  activeOpacity = 1,
  ...props
}) => {
  const offset = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = React.useCallback(
    (event: GestureResponderEvent) => {
      Animated.timing(offset, {
        toValue: 0.95,
        duration: ANIMATED_DURATION,
        useNativeDriver: true,
      }).start(() => onPressIn && onPressIn(event));
    },
    [offset, onPressIn]
  );

  const handlePressOut = React.useCallback(
    (event: GestureResponderEvent) => {
      Animated.timing(offset, {
        toValue: 1,
        duration: ANIMATED_DURATION,
        useNativeDriver: true,
      }).start(() => onPressOut && onPressOut(event));
    },
    [offset, onPressOut]
  );

  return (
    <StyledTouchable
      {...props}
      style={[{ transform: [{ scale: offset }] }, style]}
      activeOpacity={activeOpacity}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    />
  );
};

export default Touchable;
