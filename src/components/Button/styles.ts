import styled from 'styled-components';

import { Props} from './index'

export const Container = styled.button`
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  border: 0;
  border-radius: 3px;
  color: ${({ color }: Props) => color};
  padding: 18px 45px;
  text-transform: uppercase;
`;
