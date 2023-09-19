

import { State } from "react-native-gesture-handler";
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./counterActionTypes";

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action: {
    payload: number; type: any; 
}) => {
    switch (action.type) {
        case INCREMENT_COUNTER: return {
            ...state,
            counter: state.counter + action.payload
        }

        case DECREMENT_COUNTER: return {
            ...state,
            counter: state.counter - action.payload
        }
   
        default:
            return state
    }
}

export default counterReducer;