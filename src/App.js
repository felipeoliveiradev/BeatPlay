import React, { Fragment } from 'react';
// LIBS
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';

// SSTYLE GLOBAL
import GlobalStyle from './styles/global';

// COMPONENTES
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';
import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
