/**
* @jest-enviroment jsdom 
*/
import '@testing-library/jest-dom'
import{fireEvent, render, screen} from "@testing-library/react"
import App from "../src/App.tsx"
import React from 'react'
import {expect} from '@jest/globals';
import { enableFetchMocks } from 'jest-fetch-mock'
import { act } from 'react-dom/test-utils';
import { JsxEmit } from 'typescript';

enableFetchMocks()
// beforeAll(()=>
beforeEach(()=>
// act(

render(<App/>)
)

// fetch.mockResponse(
//     JSON.stringify([{
//     "success": true,
//     "deck_id": "3p40paa87x90",
//     "shuffled": true,
//     "remaining": 52
// }])),
//     [JSON.stringify([{
//     "success": true,
//     "deck_id": "3p40paa87x90",
//     "shuffled": true,
//     "remaining": 52
// }])]
// ,
//     [JSON.stringify([{
//     "success": true, 
//     "deck_id": "3p40paa87x90", 
//     "cards": [
//         {
//             "code": "6H", 
//             "image": "https://deckofcardsapi.com/static/img/6H.png", 
//             "images": {
//                           "svg": "https://deckofcardsapi.com/static/img/6H.svg", 
//                           "png": "https://deckofcardsapi.com/static/img/6H.png"
//                       }, 
//             "value": "6", 
//             "suit": "HEARTS"
//         }, 
//     ], 
//     "remaining": 51
// }])]
// )


const fetchMock=jest
.spyOn(global, 'fetch')
// .mockImplementation(()=>{
//     mockImplementation(() => 
//    Promise.resolve({ 
//       json: () => Promise.resolve(/*json goes here*/),
//    })
// )
.mockImplementation(()=>Promise.resolve({ json:()=>Promise.resolve(
`
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
    `)}
))
    
// ])}))
describe("Playthrough test", function () {
    
it('should show first A button', ()=>{

    const successUiElement=screen.getByTestId('UiTestA');
    expect(successUiElement).toBeInTheDocument();
})

it('should show first B button', ()=>{
    const successUiElement=screen.getByTestId('UiTestB');
    expect(successUiElement).toBeInTheDocument();
})

it("Check Name logic", ()=>{ 
    act(()=>{
    fireEvent.change(screen.getByLabelText('Character Name'),{target:{value:"Clint"}})
    fireEvent.click(screen.getByText("Confirm Name"),)

})
    const successUiElement=screen.getByText("Clint");
    
    expect(successUiElement).toBeInTheDocument();
})
it("Check Profession logic", ()=>{ 
    act(()=>{
    fireEvent.change(screen.getByLabelText('Profession'),{target:{value:"Rogue"}})
    fireEvent.click(screen.getByText("Confirm Profession"),)

})
    const successUiElement=screen.getByText("Rogue");
    
    expect(successUiElement).toBeInTheDocument();
})

it("Abandon Cart Test", ()=>{ 
    act(()=>{
    fireEvent.click(screen.getByText("Abandon the cart to help the person in distress"),)
})
 if(cardValue >= skillDiff){

    const successUiElement=screen.getByTestId("UiTestCartA")
    
    expect(successUiElement).toBeInTheDocument();
}
else{
    const successUiElement=screen.getByTestId("UiTestCartB")
    expect(successUiElement).toBeInTheDocument();
}
}
)
})
