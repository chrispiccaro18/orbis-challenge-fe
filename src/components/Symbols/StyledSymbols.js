import React from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';

export const SymbolsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 1rem;
`;

export const SymbolsItem = styled.li`
  color: white;
  display: flex;
  margin-right: 1rem;
  margin-top: 1rem;
  background-color: #61a8e1;
  text-transform: uppercase;
  min-width: 100px;
  padding: 6px 6px 6px 6px;
  border-radius: 4px;
  line-height: 1.75;
  font-weight: 500;

  .number-of-tweets {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin-right: 7px;

    p {
      font-size: 12px;
    }
  }
`;

export const StyledContent = styled.p`
  flex-grow: 2;
`;

const StyledDelete = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 3px;
  :hover {
    color: black;
    background-color: #8db3d1;
  }
  transition: 400ms;
`;

// eslint-disable-next-line react/prop-types
export const DeleteSymbol = ({ handleDelete }) => {
  return (
    <StyledDelete onClick={handleDelete}><ClearIcon fontSize='small' /></StyledDelete>
  );
};

