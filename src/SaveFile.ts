class SaveGame{
    charName:string;
    deckUrl:string;
    profession:string;
    health:number
    constructor(
        charName:string,
        deckUrl:string,
        profession:string,
        health:number
    )
    {
    this.charName=charName;
    this.deckUrl=deckUrl;
    this.profession=profession;
    this.health=health;
    }
}


function writeSaveGame(saveData:SaveGame){
localStorage.setItem("saveGameData",JSON.stringify(saveData))
}
function readSaveGame(){
    console.log("READ FILE: "+localStorage.getItem("saveGameData"))
}

export {SaveGame}
export{writeSaveGame}
export{readSaveGame}