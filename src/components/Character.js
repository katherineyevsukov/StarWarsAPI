// Write your Character component here
import React, { useState } from 'react';
import Details from './Details'

export default function Character(props) {
    const { character } = props
    const [details, setDetails] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const toggleFavorite = (event =>
        setFavorite(!favorite)
        )

    return(
        <div>
            <h1>{character.name}</h1>
            <div className='buttons-wrapper'>
            {!favorite ? <button onClick={toggleFavorite}>Favorite?</button> : <p>'Favorite!'</p>}
            {/* // <img onClick={toggleFavorite}src={lightsaber} alt='lightsaber'></img> */}
            <button onClick={(event)=> setDetails(!details)}>{details ? 'Close Details' : 'See Details'}</button>
            </div>
            {details && <Details character={character} setDetails={setDetails}/>}
        </div>
    )
}