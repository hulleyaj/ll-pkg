import React from 'react';
import { Button as NativeButton } from 'react-native';

const Button = ({text}) => (
  <NativeButton title={text} />
);

export default Button;