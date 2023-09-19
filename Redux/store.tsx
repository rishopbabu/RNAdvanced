import counterReducer from "./Counter/counterReducer";
import { createStore } from 'redux';

const store = createStore(counterReducer)
export default store