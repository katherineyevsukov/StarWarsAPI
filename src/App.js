import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  margin: 4rem 0;

  h1 {
    font-family: Starjhol;
    font-size: 7rem;
    font-weight: 900;
  }
`;
const StyledCharactersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
`;

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div className="App">
      <StyledHeader>
        <h1 className="Header">STAR WARS</h1>
        {error && (
          <h2>
            Sorry, there was a problem retrieving character data! Please try
            again later.
          </h2>
        )}
      </StyledHeader>
      <StyledCharactersList>
        {characters.map((char, idx) => {
          return <Character setError={setError} character={char} key={idx} />;
        })}
      </StyledCharactersList>
    </div>
  );
};

export default App;
