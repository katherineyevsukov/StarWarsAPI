import React from 'react'
import styled from 'styled-components'
import planetpic from '../images/planet.png'


const StyledHomeworldDiv = styled.div `

    background-color: white;
    background-image: url('${planetpic}');
    margin: 0 auto;
    color: black;
    display: inline-block;
    
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h3, p{
     width: 70%;
     margin: 0 auto;
     color: white;
    }

    span{
        color: lightcyan;
        font-weight: bold;
        font-size: 2.2rem;
        text-shadow: 1px .5px .5px lightskyblue;
    }

`



export default function Homeworld(props){
 const { planet } = props
    return(
        <StyledHomeworldDiv>
            <h3>My homeworld planet is <span>{planet.name}</span></h3>
            <p>{planet.name}'s climate is {planet.climate}. It has a {planet.terrain} type terrain and a population of {planet.population}.</p>
        </StyledHomeworldDiv> 
    )
}