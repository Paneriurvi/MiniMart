import React from 'react';
import { Text } from 'react-native';

export default function CustomText(props) {
  const {
    color = '#000',
    textAlign = 'left',
    numberOfLines,
    style,
    children,
    onPress,
    marginTop,
    marginLeft,
    fontSize,
    fontWeight,
  } = props;
  return (
    <Text
      numberOfLines={numberOfLines}
      suppressHighlighting
      style={[
        { marginLeft, marginTop, textAlign, color, fontSize, fontWeight },
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}
