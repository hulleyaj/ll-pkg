import React from 'react';
import { Button as WebButton } from '@material-ui/core';

const Button = ({ text, onClick }) => (
  <WebButton variant="contained" color="primary" disableElevation onClick={onClick}>{text}</WebButton>
);

export default Button;
