/* in const we are keeping array to pass datas */
// export const ADD_TO_CART = 'ADD_TO_CART'
// export const REMOVE_TO_CART = 'REMOVE_TO_CART'

import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants'
const initialState = {
    cardData: []
}

export default function cardItems(state= [], action) {
    
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn('reducer', action)
            return [ 
                /* the eariler data is present in state meaning of below line*/
                ...state,
                {cardData: action.data}

            ]
        case REMOVE_TO_CART:
            // console.warn('reducer', action)
            state.pop();
            return [ 
                /* the eariler data is present in state meaning of below line*/
                ...state
                // {cardData: action.data}

            ]
           // break;  is used to add click time to add multiple number remove break
            default:
                return state
    }
}

// normally write code is for to add it one time istself if do you need to 
//add mutliple items and clicks need to change the code (state=initialState, action )
// return {
//     ...state,
//     cardData: action.data

// } 
    


