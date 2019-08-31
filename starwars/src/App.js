import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import Card from './components/CardComponents/Card'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
          .then(response => {
            console.log(response.data);
            const person = response.data.results;
            setPerson(person);
      });
  }, [person]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      { person.map((people, index) => {
        return (
        <Card
              key = {index}
              name = {people.name}
              birthYear = {people.birth_year}
              gender = {people.gender}
              people = {people}/>
                )
      })}
    </div>
  );
}


export default App;
