import { getCard } from './ApiManager.ts'

// NOTE
// 4 components
// all hide on boot
// 

async function CartChoice1(deckIdUrl: string, profession: string, decision1:boolean, setDecision1,setDecision11Success,setDecision11Failure) {
    setDecision1(true)
    console.log("cart Choice 1 triggered"+decision1);
    if(decision1 == true){
        return(console.log("Test attempted already, please continue elsewhere"))
    }

    let skillDiff = 7;

    if (profession === "Wizard") {
        skillDiff++;
    } else {
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
            setDecision11Success(true)
            
        }
        else{
            console.log(skillDiff)
            console.log("FAILURE at skill")
            setDecision11Failure(true)

        }
    } catch (error) {
        console.error("Error fetching card value:", error);
    }
}
async function CartChoice2(deckIdUrl: string, profession: string, decision1:boolean, setDecision1,setDecision12Success,setDecision12Failure) {
    setDecision1(true)
    console.log("cart Choice 2 triggered"+decision1);
    if(decision1 == true){
        return(console.log("Test attempted already, please continue elsewhere"))
    }

    let skillDiff = 7;

    if (profession === "Warrior") {
        skillDiff++;
    } else {
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
            setDecision12Success(true)
            
        }
        else{
            console.log(skillDiff)
            console.log("FAILURE at skill")
            setDecision12Failure(true)

        }
    } catch (error) {
        console.error("Error fetching card value:", error);
    }
}
export { CartChoice1, CartChoice2 }