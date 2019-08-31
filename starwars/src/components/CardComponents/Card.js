import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 12rem;
  height: 10rem;
  border: 1px solid black;
`

function Card(prop) {

    return (
        <StyledContainer>
        <Card name={prop.name} gender={prop.gender} birthday={prop.birth_year} />
        </StyledContainer>
    );
}

export default Card;