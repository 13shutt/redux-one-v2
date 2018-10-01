
import React from 'react';
import { HeaderTitle, HeaderWrapper } from './styles';

const Header = ({ children }) => (
  <HeaderWrapper>
    <HeaderTitle>{children}</HeaderTitle>
  </HeaderWrapper>
);

export default Header;