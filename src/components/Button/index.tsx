import React from 'react';

import { Container } from './styles';

export interface Props {
  /**
   * Set the background color of your button
   */
  backgroundColor?: string;
  /**
   * Set the color of your button text
   */
  color?: string;
}

export const Button: React.FC<Props> = ({ children, backgroundColor = "#7159c1", color = "#fff" }) => {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {children}
    </Container>
  )
}

