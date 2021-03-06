import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from '../../styles/keyframes/index';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 48px;
  animation: ${fadeIn} 0.5s ease-in;
  animation-fill-mode: forwards;

  ${Spinner} {
    height: 24px;
    margin-left: 10px;
  }
`;
export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
`;
export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;
  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in;
  animation-fill-mode: forwards;

  img {
    height: 250px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }
  p {
    line-height: 22px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
  }
`;
// export const List = styled.ul``;
// export const List = styled.ul``;
// export const List = styled.ul``;
