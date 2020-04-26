import React from 'react';
import styled from 'styled-components';
import OrbisLogoSVG from './OrbisLogo.svg';

const StyledContainer = styled.div`
  max-height: 15vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #000246;
  margin-bottom: 1.5rem;
  padding-left: 10%;
`;

const StyledImg = styled.img`
  width: 20%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;


const OrbisLogo = () => {
  return <StyledContainer>
    <StyledImg src={OrbisLogoSVG} alt='Orbis Logo' />
  </StyledContainer>;
};

export default OrbisLogo;
