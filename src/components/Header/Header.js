import React from 'react';
import OrbisLogoSVG from '../../../assets/OrbisLogo.svg';
import StyledHeader from './StyledHeader';

const Header = () => {
  return <StyledHeader>
    <img src={OrbisLogoSVG} alt='Orbis Logo' />
    <h1>Orbis Challenge</h1>
  </StyledHeader>;
};

export default Header;
