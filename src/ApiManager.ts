



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


async function getCard(deckIdUrl: string) {
    console.log("deck url " + deckIdUrl);

    try {
        const response = await fetch(deckIdUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch card. Status: ${response.status}`);
        }

        const newCard = await response.json();
        console.log("card Drawn ", newCard);

        let cardValue: number = 0;

        if (newCard.cards[0].value === "KING") {
            cardValue = 13;
        } else if (newCard.cards[0].value === "QUEEN") {
            cardValue = 12;
        } else if (newCard.cards[0].value === "JACK") {
            cardValue = 11;
        } else {
            cardValue = parseInt(newCard.cards[0].value, 10);
        }

        console.log("card value after cleaning " + cardValue);
        console.log(JSON.stringify(cardValue));
        return cardValue;
    } catch (error) {
        console.error("Error fetching card:", error);
        throw error; // Rethrow the error to be caught by the calling function
    }
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
