import { getCard } from "./ApiManager";


async function CardPlay(deckIdUrl: string, profession: string, decision:boolean,skillDiff:number,bonusProfession:string, minProfession:string,
     setDecision,setDecisionSuccess,setDecisionFailure) {
    setDecision(true)
    console.log("cart Choice 2 triggered"+decision);
    if(decision == true){
        return(console.log("Test attempted already, please continue elsewhere"))
    }

    
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
            setDecisionSuccess(true)
            
        }
        else{
            console.log(skillDiff)
            console.log("FAILURE at skill")
            setDecisionFailure(true)

        }
    } catch (error) {
        console.error("Error fetching card value:", error);
    }
}
export{CardPlay}