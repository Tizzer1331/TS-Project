import { getCard } from "./ApiManager";

async function CardPlay(deckIdUrl: string, profession: string, skillDiff:number,bonusProfession:string, minProfession:string
    ,deckDecisons:Array<number>,setDeckDecisons,successValue:number) {

    
    if (profession === bonusProfession) {
        skillDiff++;
    } else if( profession===minProfession) {
        skillDiff--;
    }

    console.log("Printout of SkillDiff " + skillDiff);
    console.log("Deck ID before fetch " + deckIdUrl);

    try {
        const cardValue = await getCard(deckIdUrl);
        console.log("CARD VALUE TO CHECK " + cardValue);

        if (cardValue >= skillDiff){
            console.log(skillDiff)
            console.log("SUCCESSFUL SKILL")
            setDeckDecisons([...deckDecisons,successValue])
                       
        }
        else{
            console.log(skillDiff)
            console.log("FAILURE at skill")
            setDeckDecisons([...deckDecisons,successValue+1])
            
        }
    } catch (error) {
        console.error("Error fetching card value:", error);
    }
}
export{CardPlay}