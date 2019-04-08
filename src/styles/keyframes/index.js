import styled, { keyframes } from 'styled-components';

export const upToDown = keyframes`
  from{
    transform:translateY(50px);
    opacity:0;
  }

  to{
    transform:translateY(0px);
    opacity:1;
  }
`;
export const leftToRight = keyframes`
  from{
    transform:translateX(50px);
    opacity:0;
  }

  to{
    transform:translateX(0px);
    opacity:1;
  }
`;
export const rotate360 = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;
export const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:1;
  }
`;
