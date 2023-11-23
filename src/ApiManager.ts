



async function deckFetch(setActualDeck){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const newDeck = await response.json();
    const deckUrl= "https://www.deckofcardsapi.com/api/deck/" + newDeck.deck_id + "/draw/?count=1"
    setActualDeck(deckUrl)
}


// async function DeckDraw(deckIdUrl:string, skillReq:number){
//     console.log(deckIdUrl)
//     const response = await fetch(deckIdUrl);
//     const newCard = await response.json();
    
//     console.log("Card found " + newCard)
//     const cardValue= CardManage(newCard)
//     if(cardValue >= skillReq){
//         console.log("true")
//         return(true)
//     }
//     else{
//         console.log("false")
//         return(false)
//     }
// }

// function CardManage(newCard){
//     let cardValue= 0
//         if (newCard.cards.value === "KING"){
//         cardValue=13;
//     }
//     else if (newCard.cards.value === "QUEEN"){
//         cardValue =12;
//     }
//     else if (newCard.cards.value === "JACK"){
//         cardValue=11;
//     }
//     else{
//         cardValue=newCard.cards.value;
//     }
//     console.log("card value after cleaning " +cardValue )
//     return(cardValue)
// }


async function getCard(deckIdUrl:string){
    console.log(deckIdUrl)
    
    const response =await fetch(deckIdUrl);
    // const response =await fetch("https://www.deckofcardsapi.com/api/deck/nnvfhxfw7f1n/draw/?count=1");

    console.log(response)
    const newCard = await response.json();
    console.log("card Drawn " + newCard)
   let cardValue:number=0
    if (newCard.cards.value === "KING"){
    cardValue=13;
}
else if (newCard.cards.value === "QUEEN"){
    cardValue =12;
}
else if (newCard.cards.value === "JACK"){
    cardValue=11;
}
else{
    cardValue=newCard.cards.value;
}
console.log("card value after cleaning " +cardValue )
console.log(JSON.stringify(cardValue))
return(cardValue)
}



export {deckFetch}
export {DeckDraw}
export {CardManage}
export{getCard}


// const myPromise: Promise<string> = new Promise((resolve, reject) => {
//     // This Promise resolves to a string

//   });
// async function myAsyncFunction() {
//   try {
//     const value = await myPromise;
//     console.log('Promise resolved with value: ' + value);
//   } catch (error) {
//     console.error('Promise rejected with error: ' + error);
//   }
// }
