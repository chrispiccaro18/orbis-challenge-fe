import styled from 'styled-components';

export default styled.ul`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 1rem;

  li {
    width: 90%;
    margin-bottom: 1rem;

    span {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;
