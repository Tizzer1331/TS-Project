import './App.css';
import { NameForm, ProfessionForm } from './Userinput.tsx'  
import { CartChoice1,CartChoice2 } from './CartChoice.ts'
import {startUp} from './startUp.ts'
import { useState,useEffect } from 'react';
import{ CartChoice1SuccessUi, CartChoice1FailUi, CartChoice2SuccessUi, CartChoice2FailUi} from './CartChoiceUi.tsx'
import{Choice2aFailUi,Choice2aSuccessUi} from "./Choice2aUi.tsx"
import{Choice2bFailUi,Choice2bSuccessUi} from "./Choice2bUi.tsx"
import{Choice2cFailUi,Choice2cSuccessUi} from "./Choice2cUi.tsx"
import{Choice2dFailUi,Choice2dSuccessUi} from "./Choice2dUi.tsx"

import{CardPlay} from "./Test.ts"

function App() {

const [name, setName]= useState("");
const [profession, setProfession]= useState("Warrior");
const [actualDeckUrl,setActualDeckUrl]=useState("");

const [decision1, setDecision1]=useState(false)
const [decision11Success, setDecision11Success]=useState(false)
const [decision11Failure, setDecision11Failure]=useState(false)
const [decision12Success, setDecision12Success]=useState(false)
const [decision12Failure, setDecision12Failure]=useState(false)


const [decision2, setDecision2]=useState(false)
const [decision2aSuccess, setDecision2aSuccess]=useState(false)
const [decision2aFailure, setDecision2aFailure]=useState(false)
const [decision2bSuccess, setDecision2bSuccess]=useState(false)
const [decision2bFailure, setDecision2bFailure]=useState(false)

const [decision2cSuccess, setDecision2cSuccess]=useState(false)
const [decision2cFailure, setDecision2cFailure]=useState(false)
const [decision2dSuccess, setDecision2dSuccess]=useState(false)
const [decision2dFailure, setDecision2dFailure]=useState(false)
useEffect(()=> startUp(setActualDeckUrl),[])



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
        <div className="Ui">
        <NameForm setName={setName}/>
        <br/>
        <div className="flavourText">
        Your name traveller is <br/>
        {name}

        </div>
        <ProfessionForm setProfession={setProfession}/>
        <br/>
        <div className="flavourText">
        you're a {profession}, a wise profession in this age
        <br/>
        </div>
        <br/>
        </div>
        {/* <p>
          Click here to create a save
        </p>
        <button onClick={()=>{}}>Save game</button> */}
        {/* {<p>savegame1.id</p>} */}
        <div>
          <p className='flavourText'>
            You come across a torn up cart, a human cry to your left disturbs your musings on whether any rations
            remain in the cart, what would you like to do?
          </p>
          <br/>
        </div>

        <div className= "Ui">
        {decision1 === false &&
        <div>
        <button onClick={()=>{CartChoice1(actualDeckUrl, profession,decision1,setDecision1,setDecision11Success,setDecision11Failure)}}>Abandon the cart to help the person in distress</button>
        <button onClick={()=>{CartChoice2(actualDeckUrl, profession,decision1,setDecision1,setDecision12Success,setDecision12Failure)}}>Start to look through the cart for supplies</button>
        </div>
        }
        </div>
          
        <br/>
        <div className="choiceText">
          <div>
          {decision11Success===true &&
            <CartChoice1SuccessUi/>
          }
          </div>
          <div>
          {decision11Failure===true &&
            <CartChoice1FailUi/>}

          </div>
          <div>
          {decision12Success===true &&
            <CartChoice2SuccessUi/>
          }            
          {decision12Failure===true &&
            <CartChoice2FailUi/>}
          </div>

        </div>
        <br/>
       
        {decision11Success===true &&
         <p className="flavourText">
        The cart driver having bandaged himself and found his Ox (by some miracle, the goblins are renowned for eating oxen),
         offers you a lift to town, though you expect with some ulterior motive.
        </p>}
        {decision12Failure===true &&
      <p className="flavourText">
        You decide to strirke off on your own away from the mad man and the goblins. Do you take the direct route back through the forest, hopefully avoiding any travellers on 
        the road. Or take the road directly back to Hounds Tooth , possibly finding more people along the way.
      </p>}

        <div className="Ui">
     
        {decision12Success===true && decision2===false &&
        <button onClick ={()=>{CardPlay(actualDeckUrl, profession,decision2,9,"Rogue","Warrior", setDecision2,setDecision2aSuccess,setDecision2aFailure)}}>
          Ride in the back of his cart for an easy ride back to Hounds Tooth</button>}
        {decision12Success===true  && decision2===false &&
        <button onClick ={()=>{CardPlay(actualDeckUrl, profession,decision2,7,"Rogue","Wizard", setDecision2,setDecision2bSuccess,setDecision2bFailure)}}>
          Strike off on your own across cutting across the wilds</button>}


        {decision12Failure===true && decision2===false &&
        <button onClick ={()=>{CardPlay(actualDeckUrl, profession,decision2,5,"Wizard","Warrior",setDecision2,setDecision2cSuccess,setDecision2cFailure)}}>
          Follow the road towards Hounds Tooth</button>}
        {decision12Failure===true  && decision2===false &&
        <button onClick ={()=>{CardPlay(actualDeckUrl, profession,decision2,7,"Rogue","Warrior",setDecision2,setDecision2dSuccess,setDecision2dFailure)}}>
          or break off and go off the beaten path to try avoid ambushes</button>}
          
        </div>
        <div className="flavourText">
        {decision2aSuccess===true &&
       <Choice2aSuccessUi/>
        }
        {decision2aFailure===true &&
       <Choice2aFailUi/>
        }
        {decision2bSuccess===true &&
       <Choice2bSuccessUi/>
        }
        {decision2bFailure===true &&
       <Choice2bFailUi/>
        }

        {decision2cSuccess===true &&
       <Choice2cSuccessUi/>
        }
        {decision2cFailure===true &&
       <Choice2cFailUi/>
        }
        {decision2dSuccess===true &&
       <Choice2dSuccessUi/>
        }
        {decision2dFailure===true &&
       <Choice2dFailUi/>
        }
        </div>
      </body>
    </div>
  );
}

export default App
