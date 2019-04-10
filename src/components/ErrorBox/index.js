import React, { Component } from 'react';
// LIBS
import PropTypes from 'prop-types';
// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ErrorActions } from '../../store/ducks/error';

// CSS | JSS
import { Container } from './styles';

// IMAGES
import CloseIcon from '../../assets/images/close.svg';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);
ErrorBox.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({}).isRequired,
  visible: PropTypes.bool,
  message: PropTypes.string,
};
const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);
