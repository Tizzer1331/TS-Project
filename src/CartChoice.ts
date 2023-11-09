import { deckDraw } from './ApiManager.ts'
import{ CartChoice1SuccessUi, CartChoice1FailUi, CartChoice2SuccessUi, CartChoice2FailUi} from './CartChoiceUi.tsx'

// NOTE
// 4 components
// all hide on boot
// 

function CartChoice1(deckIdUrl:string, profession:string) {
    
    console.log("cart Choice 1 triggered")
    const decision11=true
    let skillDiff = 7
    if (profession === "Wizard") {
        skillDiff++
    }
    else {
        skillDiff--
    }
    console.log("Printout of SkillDiff "+ skillDiff)
  
    // (async () => {
    //     const cartSkillCheck = await deckDraw(deckIdUrl, skillDiff);
    //     if (cartSkillCheck == true){
    //                 return(CartChoice1SuccessUi)
    //             }
    //             else{
    //                 return(CartChoice1FailUi)
    //             }
    // })();
    async function cartDraw(){
    const cartSkillCheck = await deckDraw(deckIdUrl, skillDiff)
    if (cartSkillCheck == true){
        return(CartChoice1SuccessUi)
    }
    else{
        return(CartChoice1FailUi)
    }
}
cartDraw()
    
}

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


export { CartChoice1 }