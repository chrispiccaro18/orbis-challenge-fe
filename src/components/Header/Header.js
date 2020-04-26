import React from 'react';
import styled from 'styled-components';
import OrbisLogoSVG from '../../../assets/OrbisLogo.svg';

const StyledContainer = styled.div`
  max-height: 15vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  background-color: #000246;
  margin-bottom: 1.5rem;
  
  h1 {
    color: white;
    align-self: center;
    justify-self: center;
    /* https://www.smashingmagazine.com/2016/05/fluid-typography/ */
    font-size: calc(16px + (28 - 16) * (100vw - 480px) / (1300 - 480));
  }
  `;

const StyledImg = styled.img`
  width: 40%;
  align-self: center;
  padding-left: 10%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;


const Header = () => {
  return <StyledContainer>
    <StyledImg src={OrbisLogoSVG} alt='Orbis Logo' />
    <h1>Orbis Challenge</h1>
  </StyledContainer>;
};

export default Header;
