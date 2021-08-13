// Write your Character component here
import React, { useState } from 'react';
import Details from './Details'
import styled from 'styled-components'
import lightsaber from '../images/lightsaber.png'

const StyledCharacterDiv = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    border: 2px dashed limegreen;
    padding: 1rem;
    background-color: black;

    .buttons-wrapper{
        display: flex;
    }

    h2{
        font-size: 3rem;
    }
    img{
        height: 5rem;
        width: 5rem;
        background-color: black;
        margin: auto;
        border: 4px outset grey;
    }
`
const StyledButton = styled.button`
    font-family: 'Georama', sans-serif;
    font-weight: bolder;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2ch;
    padding: 0 1em;
    background-color: transparent;
    color: white;
    border: 4px outset grey;
    margin-left: 1rem;

    &:active {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 10px 20px rgba(145, 92, 182, 1);
    }
`



export default function Character(props) {
    const { character } = props
    const [details, setDetails] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const toggleFavorite = (event =>
        setFavorite(!favorite)
        )

    return(
        <StyledCharacterDiv>
            <h1>{character.name}</h1>
            <div className='buttons-wrapper'>
            {/* {!favorite ? <StyledButton onClick={toggleFavorite}>Favorite?</StyledButton> : <p>'Favorite!'</p>} */}
            {!favorite ? <StyledButton onClick={toggleFavorite}>Favorite?</StyledButton> : <img onClick={toggleFavorite}src={lightsaber} alt='lightsaber'></img>}
            <StyledButton onClick={(event)=> setDetails(!details)}>{details ? 'Close Details' : 'See Details'}</StyledButton>
            </div>
            {details && <Details character={character} setDetails={setDetails}/>}
            </StyledCharacterDiv>
    )
}