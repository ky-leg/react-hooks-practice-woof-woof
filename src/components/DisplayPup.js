import React from "react";

function DisplayPup({pup, onGoodClick}){

    console.log(pup)

    if (!pup.name){
        return (
            <h2>Click a pup! :-)</h2>
        )
    }


    return (
        <>
        <img src={pup.image} alt={pup.name} />
        <h2>{pup.name}</h2>
        
        <button onClick={() => onGoodClick(pup)}>{pup.isGoodDog? "Good Dog!":"Bad Dog!"}</button>
        </>
    )
    
    
}

export default DisplayPup;