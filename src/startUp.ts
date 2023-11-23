import { SaveGame, writeSaveGame, readSaveGame } from './SaveFile.ts'
import {deckFetch} from './ApiManager.ts'

// async function deckCollection(){
    
//     const deckUrl=await deckFetch()
//     return(deckUrl)
//   }

function startUp(actualDeckUrl:string, setActualDeck){
 deckFetch(setActualDeck)
const gameSave1 = new SaveGame(
    "Riddick",
    "Arkvoodle",
    "Warrior", 
    13
  )
  writeSaveGame(gameSave1)
  readSaveGame()
  console.log("game save details:", gameSave1)


}
  export {startUp}