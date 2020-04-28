import styled from 'styled-components';

export default styled.div`
  max-height: 15vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  background-color: #000246;
  margin-bottom: 1.5rem;

  img {
    width: 40%;
    align-self: center;
    padding-left: 10%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  h1 {
    color: white;
    align-self: center;
    justify-self: center;
    /* https://www.smashingmagazine.com/2016/05/fluid-typography/ */
    font-size: calc(16px + (28 - 16) * (100vw - 480px) / (1300 - 480));
  }
`;
