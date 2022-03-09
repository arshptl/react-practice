import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.div`
display: flex;
background-color: lightgray;
padding: 0.8em 1em;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Button = ({ handleMethod, title }) => {
  return (
    <StyledButton onClick={handleMethod}>{title}</StyledButton>
  )
}

export default Button