import React, { Component } from 'react';
import LoadingIcon from '../../assets/images/loading.svg';
import { Spinner } from './styles';

export default class Loading extends Component {
  render() {
    return <Spinner src={LoadingIcon} alt="Carregando" />;
  }
}
