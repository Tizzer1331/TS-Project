/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import {render,screen } from '@testing-library/react'
import {Choice2aSuccessUi, Choice2aFailUi} from '../src/Choice2aUi.tsx'
import {Choice2bFailUi,Choice2bSuccessUi} from '../src/Choice2bUi.tsx'
import {Choice2cFailUi,Choice2cSuccessUi} from '../src/Choice2cUi.tsx'
import {Choice2dFailUi,Choice2dSuccessUi} from '../src/Choice2dUi.tsx'

test('loads items test text is rendered correctly 2ASuccess',()=>{
render(<Choice2aSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest1');
expect(successUiElement).toBeInTheDocument();
})

test('loads items test text is rendered correctly 2AFail',()=>{
render(<Choice2aFailUi/>)
const successUiElement=screen.getByTestId('UiTest2');
expect(successUiElement).toBeInTheDocument();
})
    
test('loads items test text is rendered correctly 2BSuccess',()=>{
render(<Choice2bSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest3');
expect(successUiElement).toBeInTheDocument();
    })
        
test('loads items test text is rendered correctly 2BFail',()=>{
render(<Choice2bFailUi/>)
const successUiElement=screen.getByTestId('UiTest4');
expect(successUiElement).toBeInTheDocument();
    })

test('loads items test text is rendered correctly 2CSuccess',()=>{
render(<Choice2cSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest5');
expect(successUiElement).toBeInTheDocument();
    })
                
test('loads items test text is rendered correctly 2CFail',()=>{
render(<Choice2cFailUi/>)
const successUiElement=screen.getByTestId('UiTest6');
expect(successUiElement).toBeInTheDocument();
   })

test('loads items test text is rendered correctly 2DSuccess',()=>{
render(<Choice2dSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest7');
expect(successUiElement).toBeInTheDocument();
    })
    
test('loads items test text is rendered correctly 2DFail',()=>{
render(<Choice2dFailUi/>)
const successUiElement=screen.getByTestId('UiTest8');
expect(successUiElement).toBeInTheDocument();
    })
        
                    


// render({Choice2aFailUi})
// test('loads items test text is rendered correctly',()=>{
//     render({Choice2bSuccessUi})
//     render({Choice2bFailUi})
    
// })
// test('loads items test text is rendered correctly',()=>{
//     render({Choice2cSuccessUi})
//     render({Choice2cFailUi})
        
// })