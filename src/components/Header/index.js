import React from 'react';
import { Container, Search, User } from './styles.js';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars0.githubusercontent.com/u/47610299?v=4" alt="Avatar" />
      Felipe Oliveira
    </User>
  </Container>
);

export default Header;
