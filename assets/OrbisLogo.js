import React from 'react';
import styled from 'styled-components';
import OrbisLogoSVG from './OrbisLogo.svg';

const StyledContainer = styled.div`
max-height: 20vh;
width: 100%;
display: flex;
justify-content: center;
background-color: #000246;
`;

const StyledImg = styled.img`
/* height: 100%; */
width: 50%;
margin-top: 1rem;
margin-bottom: 1rem;
`;


const OrbisLogo = () => {
  return <StyledContainer>
    <StyledImg src={OrbisLogoSVG} alt='Orbis Logo' />
  </StyledContainer>;
};

export default OrbisLogo;
