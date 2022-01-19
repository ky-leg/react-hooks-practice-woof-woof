import React, {useState, useEffect} from "react";
import Pup from "./Pup"
import DisplayPup from "./DisplayPup.js"

function App() {

  const [pups, setPups] = useState([])
  const [displayPup, setDisplayPup] = useState({})
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(r => setPups(r))
  }, [])

  function onClick(pup){
    
    setDisplayPup(pup)
  }

  function onGoodClick(pup){
    const newIsGood = !pup.isGoodDog
    console.log('dog b4', newIsGood)
    fetch(`http://localhost:3001/pups/${pup.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "applicaiton/json",
      },
      body: JSON.stringify({
        isGoodDog: newIsGood,
      }),
    })
    .then(r => r.json())
    .then(r => console.log(r))
    // console.log(changePup)
  }

  function goodPupToggle(){
    setFilter(!filter)
  }
  
  // fetch(`http://localhost:4000/items/${item.id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     isInCart: !item.isInCart,
  //   }),
  // })

  console.log(displayPup)

  const goodPups = pups.filter(pup => pup.isGoodDog===true).map(pup => {
    return (
      <Pup 
        key={pup.id} 
        onClick={() => onClick(pup)}
        name={pup.name}/>
    )
  })

  const allPups = pups.map(pup => {
    return (
      <Pup 
        key={pup.id} 
        onClick={() => onClick(pup)}
        name={pup.name}/>
    )
  })

  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={goodPupToggle} id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {filter? goodPups:allPups}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {<DisplayPup pup={displayPup} onGoodClick={onGoodClick} />}
        </div>
      </div>
    </div>
  );
}

export default App;
