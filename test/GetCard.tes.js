import { getCard } from "../src/ApiManager";
import { CardLogic} from "../src/ApiManager"
jest.mock('fetch');

const newCard = [{
    "success": true,
    "deck_id": "33sg46deaqwp",
    "cards": [
        {
            "code": "9S",
            "image": "https://deckofcardsapi.com/static/img/9S.png",
            "images": {
                "svg": "https://deckofcardsapi.com/static/img/9S.svg",
                "png": "https://deckofcardsapi.com/static/img/9S.png"
            },
            "value": "9",
            "suit": "SPADES"
        }
    ],
    "remaining": 51
}]
test("testing returning correct value from a card draw",()=>{

expect(getCard).toBe(9)


})


// async function getCard(deckIdUrl: string) {
//     console.log("deck url " + deckIdUrl);
//     try {
//         const response = await fetch(deckIdUrl);

//         if (!response.ok) {
//             throw new Error(`Failed to fetch card. Status: ${response.status}`);
//         }
//         const newCard = await response.json();
//         console.log("card Drawn ", newCard);
//        return CardLogic(newCard.cards[0].value)
//     } catch (error) {
//         console.error("Error fetching card:", error);
//         throw error; // Rethrow the error to be caught by the calling function
//     }
// }