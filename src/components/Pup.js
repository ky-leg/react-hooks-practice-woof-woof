import React from "react";

function Pup({name, onClick, filter}){
    
    return (
        <span onClick={onClick}>{name}</span>
    )
}

export default Pup;