import { DeckDraw,getCard } from './ApiManager.ts'
import{ CartChoice1SuccessUi, CartChoice1FailUi, CartChoice2SuccessUi, CartChoice2FailUi} from './CartChoiceUi.tsx'

// NOTE
// 4 components
// all hide on boot
// 

// async function CartChoice1(deckIdUrl:string, profession:string) {
//     console.log("cart Choice 1 triggered")
//     // const decision11=true
//     let skillDiff = 7
//     if (profession === "Wizard") {
//         skillDiff++
//     }
//     else {
//         skillDiff--
//     }
//     console.log("Printout of SkillDiff "+ skillDiff)
//     await cartDraw(deckIdUrl, skillDiff)
  
//     // (async () => {
//     //     const cartSkillCheck = await deckDraw(deckIdUrl, skillDiff);
//     //     if (cartSkillCheck == true){
//     //                 return(CartChoice1SuccessUi)
//     //             }
//     //             else{
//     //                 return(CartChoice1FailUi)
//     //             }
//     // })(); 
// }
// async function cartDraw(deckIdUrl:string, skillDiff:number){
//     const cartSkillCheck = await DeckDraw(deckIdUrl, skillDiff)
//     console.log("pass or Fail check " + cartSkillCheck)
//     if (cartSkillCheck == true){
//         console.log(CartChoice1SuccessUi)
//         return(CartChoice1SuccessUi)
//     }
//     else{
//         console.log(CartChoice1FailUi)
//         return(CartChoice1FailUi)
        
//     }
// }

// function CartChoice2(deckIdUrl, profession) {
//     console.log("cart Choice 2 triggered")
//     const decision12=true
//     let skillDiff = 7
     
//     if (profession === "Rogue") {
//         skillDiff++
//     }
//     else {
//         skillDiff--
//     }
//     if (deckDraw(deckIdUrl, skillDiff) = true) { 
//         const cartChoice2Success=true 
//         console.log("skill "+ cartChoice2Success)
//         return (CartChoice2SuccessUi)
//     }
//     else {
//         const cartChoice2Success=false
//         console.log("skill "+ cartChoice2Success)
//         return (CartChoice2FailUi)
//     }
    
// }

function CartChoice1(deckIdUrl:string, profession:string) {
            console.log("cart Choice 1 triggered")
            // const decision11=true
            let skillDiff = 7
            if (profession === "Wizard") {
                skillDiff++
            }
            else {
                skillDiff--
            }
            console.log("Printout of SkillDiff "+ skillDiff)
            console.log("Deck ID before fetch " + deckIdUrl)
            const cardValue = getCard(deckIdUrl)
            console.log("CARD VALUE TO CHECK"+cardValue)
            console.log(JSON.stringify(cardValue))
        }
export { CartChoice1 }