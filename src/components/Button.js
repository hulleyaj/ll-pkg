import React from 'react';
import { Button as WebButton } from '@material-ui/core';

const Button = ({ text }) => (
  <WebButton variant="contained" color="primary" disableElevation>{text}</WebButton>
);

export default Button;
