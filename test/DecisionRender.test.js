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
});
