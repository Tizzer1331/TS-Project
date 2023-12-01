import { SaveGame, writeSaveGame, readSaveGame } from './SaveFile.ts'
import {deckFetch} from './ApiManager.ts'


function startUp(setActualDeck){
 deckFetch(setActualDeck)
const gameSave1 = new SaveGame(
    1331,
    "Riddick",
    "Arkvoodle",
    "Warrior", 
    13,
    []

  )
  writeSaveGame(gameSave1)
  readSaveGame()
  console.log("game save details:", gameSave1)


}
  export {startUp}