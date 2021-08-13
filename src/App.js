import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [error, setError] = useState(null)
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err);
      setError(true)
    })
    }, [])

  return (
    <div className="App">
      <header>
      <h1 className="Header">STAR WARS</h1>
      {error && <h2>Sorry, there was a problem retrieving character data! Please try again later.</h2>}
        </header>
        <div>
        {characters.map((char, idx) => {
          return <Character character={char} key={idx}/>
        })
      }
      </div>
      
    </div>
  );
}

export default App;