import React from "react";

function Pup({name, onClick}){
    return (
        <span onClick={onClick}>{name}</span>
    )
}

export default Pup;