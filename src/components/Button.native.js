import React from 'react';
import { Button as NativeButton } from 'react-native';

const Button = ({text, onClick}) => (
  <NativeButton title={text} onPress={onClick} />
);

export default Button;