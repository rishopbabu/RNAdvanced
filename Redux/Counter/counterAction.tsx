import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./counterActionTypes";

export const incrementCounterAction = (params: any) => {
    return {
        type: INCREMENT_COUNTER,
        payload: params
    }
}

export const decrementCounterAction = (params: any) => {
    return {
        type: DECREMENT_COUNTER,
        payload: params
    }
}