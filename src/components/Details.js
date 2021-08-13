import React from 'react';

export default function Details(props){
    const { character, setDetails } = props
    
    console.log(character)
        return(
            <div>
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
            </div>
        )
    
    } 