import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    border: 2px solid gray;
    width: 50%;    
`

function Card(prop) {

    return (
        <StyledContainer>
        <h1>{prop.name}</h1>
        <p>Gender: {prop.gender}</p>
        <p>Eye Color: {prop.eyeColor}</p>
        <p>Birthday: {prop.birthYear}</p>
        <p>Height: {prop.height}</p>
        <p>Mass: {prop.mass}</p>
        <p>Edited: {prop.edited}</p>
        <p>Created: {prop.created}</p>
        </StyledContainer>
    );
}

export default Card;