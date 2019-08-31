import React, { useState } from 'react';
import styled from 'styled-components';

const CustomContainer = styled.div`
    width: 8rem;
    height: 10rem;
`

function Card(prop) {

    return (
        <>
        {charState.map(() => { 
            return <CustomContainer name={prop.name} birth={prop.birth_year} created={prop.createD} edited={prop.edited}></CustomContainer>;
          })}
        </>
    );
}

export default Card;