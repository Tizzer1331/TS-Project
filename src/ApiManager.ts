async function deckFetch(setActualDeck){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const newDeck = await response.json();
    const deckUrl= "https://www.deckofcardsapi.com/api/deck/" + newDeck.deck_id + "/draw/?count=1"
    setActualDeck(deckUrl)
}




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
        } else if (newCard.cards[0].value ==="ACE"){
            cardValue=1;
        }else  {
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
export{getCard}


