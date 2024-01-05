/**
* @jest-enviroment jsdom 
*/
import '@testing-library/jest-dom'
import { getByText, getByTestId } from '@testing-library/react'
import{fireEvent, render, screen} from "@testing-library/react"
import App from "../src/App.tsx"
import React from 'react'
import {expect, jest, test} from '@jest/globals';
import { enableFetchMocks } from 'jest-fetch-mock'
import { act } from 'react-dom/test-utils';

enableFetchMocks()

fetch.mockResponse(JSON.stringify({
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
}), )
// global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
// jest.mock('fetch');




beforeEach (()=>{
render(<App/>)
});
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

// it("checking decision Logic, with mock draw"), ()=>{
//     fetch.mockResponse(JSON.stringify({
//     "success": true, 
//     "deck_id": "3p40paa87x90", 
//     "cards": [
//         {
//             "code": "8H", 
//             "image": "https://deckofcardsapi.com/static/img/8H.png", 
//             "images": {
//                           "svg": "https://deckofcardsapi.com/static/img/8H.svg", 
//                           "png": "https://deckofcardsapi.com/static/img/8H.png"
//                       }, 
//             "value": "8", 
//             "suit": "HEARTS"
//         }]
        
//     }),)
//     fireEvent.click(screen.getByText("Abandon the cart to help the person in distress"),)

//     act(()=>{
//         const successUiElement=screen.getByText("Clint");
    
//         expect(successUiElement).toBeInTheDocument();        
//     })
// }

})
