import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding: 1rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    border: 2px solid gray;
    width: 50%;    
`

const NameStyle = styled.h1`
    text-shadow: 1px 1px 5px #fff;
    color: navy;
`

function Card(prop) {

    return (
        <StyledContainer>
        <NameStyle>{prop.name}</NameStyle>
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