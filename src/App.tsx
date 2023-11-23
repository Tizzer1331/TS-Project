import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { SaveGame, writeSaveGame, readSaveGame } from './SaveFile.ts'
import { NameForm, ProfessionForm } from './Userinput.tsx'  
import { CartChoice1 } from './CartChoice.ts'
import {startUp} from './startUp.ts'
import { useState,useEffect } from 'react';
// import{ CartChoice1SuccessUi, CartChoice1FailUi, CartChoice2SuccessUi, CartChoice2FailUi} from './CartChoiceUi.tsx'
// async function deckCollection(){
// deckUrl=await deckFetch(deckUrl)
// return(deckUrl)
// setActualDeckUrl(deckUrl)
// function displayDeck(DECKRETURN){
//   console.log("CURRENT DEBUGGING")
//   console.log(DECKRETURN)


function App() {
// const [actualDeckUrl,setActualDeckUrl]=useState("");
const [name, setName]= useState("");
const [profession, setProfession]= useState("Warrior");
const [actualDeckUrl,setActualDeckUrl]=useState("");

useEffect(()=> startUp(actualDeckUrl,setActualDeckUrl),[])

async function DUMMYCALL(actualDeckUrl:string){
  
  const response = await fetch(actualDeckUrl);

  const dummyCard = await response.json();
  
  console.log(dummyCard)
}

DUMMYCALL(actualDeckUrl)

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body className="background">
        <div className="titleSpeech">
        <h1>
          Dungeon Delve
        </h1>
        <h4>
          A fond farewell to Chose your own adventure stories
        </h4>
        </div>
        <br/><br/>
        <img className="treasureImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUT4qvrtfWdRkIGhuQZMFawtAsKd8uh5n-A&usqp=CAU" alt="treasure" />
        <p className="flavourText">
          Welcome Adventurer, your recent trip to the Caves of Forwick was most profitable, you looted cleanly
          and managed to escape with your life, now your rations runs empty and the gold weighs heavy on your back.
          You are traversing the forests of the nearby township of Hounds tooth, a town carved into the side of a mountain.
          This is the begining of a choose your own adventure path, you will make the decisions and the action you choose may
          have consequences, but first a few decisions.
        </p>
        <div className="UiStart">
        <NameForm setName={setName}/>
        <br/>
        {name}
        <ProfessionForm setProfession={setProfession}/>
        <br/>
        {profession}

        {/* <p>
          Click here to create a save
        </p>
        <button onClick={()=>{}}>Create Save game</button> */}
        </div>

        <div>
          <p className='flavourText'>
            You come across a torn up cart, a human cry to your left disturbs your musings on whether any reations
            remain in the cart, what would you like to do?
          </p>
          <br/>
        <button onClick={()=>{CartChoice1(actualDeckUrl, profession)}}>Abandon the cart to help the person in distress</button>
        {/* <button onClick={()=>{CartChoice2(actualDeckUrl, profession)}}>Ignore the cry and loot the abandoned cart for supplies</button> */}
        </div>
        <div className="cartResults">

        </div>
      </body>
    </div>
  );
}

export default App
