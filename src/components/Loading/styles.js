import styled, { keyframes } from 'styled-components';
import { rotate360 } from '../../styles/keyframes/index';

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
`;
