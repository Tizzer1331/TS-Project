/**
* @jest-enviroment jsdom 
*/
import '@testing-library/jest-dom'
import{render, screen} from "@testing-library/react"
import App from "../src/App.tsx"
import React from 'react'
import {expect, jest, test} from '@jest/globals';
import { enableFetchMocks } from 'jest-fetch-mock'
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

it('should show first A button', ()=>{
    const successUiElement=screen.getByTestId('UiTestA');
    expect(successUiElement).toBeInTheDocument();
})

it('should show first B button', ()=>{
    const successUiElement=screen.getByTestId('UiTestB');
    expect(successUiElement).toBeInTheDocument();
})
// global.fetch.mockClear();
// delete global.fetch;