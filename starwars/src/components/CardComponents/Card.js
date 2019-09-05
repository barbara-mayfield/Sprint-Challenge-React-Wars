import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 2rem;
    margin: 0 auto;
    border: 1px solid black;
`

function Card(prop) {

    return (
        <StyledContainer>
        <h1>{prop.name}</h1>
        <p>{prop.gender}</p>
        <p>{prop.birthYear}</p>
        </StyledContainer>
    );
}

export default Card;