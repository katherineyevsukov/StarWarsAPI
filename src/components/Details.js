import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledDetailsBox = styled.div `
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    

.character-info{
    background-color: #fefefe;
    box-shadow: 2px 8px 12px 20px rgba(143,252,255, 1);
    margin: 25% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    color: black;
    border: 4px outset #15f2fd;
    animation-name: spin;
    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-timing-function: linear; 


    @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
}

ul {
    list-style-type: none;
}

.close{
    color: #aaa;
    float: right;
    font-size: 4rem;
    font-weight: bold;
}

`

export default function Details(props){
    const { character, setDetails } = props
    
    console.log(character)
    return(
        <StyledDetailsBox>
        <div className='character-info'>
            <button onClick={event => setDetails(false)}className='close'>X</button>
            <h3>About: {character.name}</h3>
            <ul>
                <li>Height: {character.height}</li>
                <li>Mass: {character.mass}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
                <li>Eye Color: {character.eye_color}</li>
                <li>Birth Year: {character.birth_year}</li>
                <li>Gender: {character.gender}</li>
            </ul>
        </div>
        </StyledDetailsBox>
    )
    
    } 