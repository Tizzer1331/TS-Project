


async function deckFetch(deckUrl:string){
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const newDeck = await response.json();
    deckUrl= "https://www.deckofcardsapi.com/api/deck/"+newDeck.deck_id+"/draw/?count=1"
return (deckUrl)
    //    console.log("success?"+newDeck.success);
    //    console.log("new deck ID:"+newDeck.deck_id);
    //    console.log("IN FUNCTION:"+deckUrl)
}


// PROMISE ATTEMPT
// function deckFetch(){
//     return(
//      new Promise(function(resolve){
//         fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//         .then(response => response.json())
//         .then(data => resolve(data.reponse));

//          .then(console.log(data))
//          .then(resolve(actualDeckUrl="https://www.deckofcardsapi.com/api/deck/"+newDeck.deck_id+"/draw/?count=1"))
//      })
//     )
// }

async function deckDraw(deckUrl:string,skillReq:number){
    //Prime real estate for testing code
    let value=0
    
    const response = await fetch(deckUrl);
    console.log(response)
    const newCard = await response.json();

    if (newCard.value === "KING"){
        value=13;
    }
    else if (newCard.value === "QUEEN"){
        value =12;
    }
    else if (newCard.value === "JACK"){
        value=11;
    }
    else{
        value=newCard.value;
    }
    console.log(value)

if ( value >= skillReq){
    
    const skillSuccess=true
    return(
        skillSuccess
    // true
    )
}
else{  
    
    const skillSuccess=false
    return(
        skillSuccess
    // false
    )
}

}

export {deckFetch}
export {deckDraw}