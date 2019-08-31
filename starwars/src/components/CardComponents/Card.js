import React from 'react';

function Card(prop) {

    return (
        <>
        <Card name={prop.name} gender={prop.gender} birthday={prop.birth_year} />
        </>
    );
}

export default Card;