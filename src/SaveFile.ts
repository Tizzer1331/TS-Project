export {SaveGame}
export{writeSaveGame}
export{readSaveGame}


//

// SAVE CLASS 2
class SaveGame{
    ID:number
    charName:string;
    deckUrl:string;
    profession:string;
    health:number
    saveData:Array<number>
    constructor(
        ID:number,
        charName:string,
        deckUrl:string,
        profession:string,
        health:number,
        saveData:Array<number>
    )
    {
    this.ID=ID
    this.charName=charName;
    this.deckUrl=deckUrl;
    this.profession=profession;
    this.health=health;
    this.saveData=saveData;
    }
}

function readSaveGame(saveName:string,setDeckDecisons,setActualDeckUrl){
    if( saveName ==""){
        alert("Please enter the name for the save and your character")
    }
    else {
        //INSERT TRY CATCH HERE for incorrect name
    console.log("READ FILE: "+localStorage.getItem(saveName))
    let saveData=localStorage.getItem(saveName)
    saveData =JSON.parse(saveData)
    console.log(saveData)
    console.log(typeof(saveData))
    // setDeckDecisons(saveData.deckDecisions)
    // setActualDeckUrl(saveData.deckUrl)
    // setProfession(saveData.profession)
}
}

function writeSaveGame(saveName:string, actualDeckUrl:string, profession:string, deckDecisions:Array<number>){
    if( saveName ==""){
        alert("Please enter a name for the save and your character")
    }
    else {
        const gameSave1 = new SaveGame(
            1331,
            saveName,
            actualDeckUrl,
            profession, 
            13,
            deckDecisions
          )
    localStorage.setItem(saveName,JSON.stringify(gameSave1))
    console.log(localStorage.getItem(saveName))
    }
}