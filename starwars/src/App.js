import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
            setPerson(response.data.results);
          })
          .catch(error => console.log(error));
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      { person.map((person, index) => {
        return (
        <Card
              key = {index}
              name = {person.name}
              gender = {person.gender}
              eyeColor = {person.eye_color}
              birthYear = {person.birth_year}
              height = {person.height}
              mass = {person.mass}
              edited = {person.edited}
              created = {person.created}
               />
        )
      })}
    </div>
  );
}


export default App;
