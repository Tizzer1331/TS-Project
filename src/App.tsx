import './App.css';
import { NameForm, ProfessionForm } from './Userinput.tsx'  
import { CartChoice1,CartChoice2 } from './CartChoice.ts'
import {startUp} from './startUp.ts'
import { useState,useEffect } from 'react';
import{ CartChoice1SuccessUi, CartChoice1FailUi, CartChoice2SuccessUi, CartChoice2FailUi} from './CartChoiceUi.tsx'


function App() {

const [name, setName]= useState("");
const [profession, setProfession]= useState("Warrior");
const [actualDeckUrl,setActualDeckUrl]=useState("");
const [decision11, setDecision11]=useState(false)
const [decision11Success, setDecision11Success]=useState(false)
const [decision11Failure, setDecision11Failure]=useState(false)
const [decision1, setDecision1]=useState(false)
const [decision12Success, setDecision12Success]=useState(false)
const [decision12Failure, setDecision12Failure]=useState(false)

useEffect(()=> startUp(actualDeckUrl,setActualDeckUrl),[])



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
        <button onClick={()=>{}}>Create Save game</button> */}

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
        <div className="Ui">
        {decision11Success===true &&
        <button onClick ={()=>{FUNCTION}}>SUCCESS OPTION1</button>}
        {decision11Success===true &&
        <button onClick ={()=>{FUNCTION}}>SUCCESS OPTION2</button>}

        {decision11Failure===true &&
        <button onClick ={()=>{FUNCTION}}>FAILURE OPTION1</button>}
        {decision11Failure===true &&
        <button onClick ={()=>{FUNCTION}}>FAILURE OPTION2</button>}
        </div>
      </body>
    </div>
  );
}

export default App
