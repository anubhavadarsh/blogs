import { combineReducers, createStore } from "redux";

import counterReducer from "./counterReducer";

const reducer = combineReducers({
	count: counterReducer,
})

const store = createStore(reducer);

export default store;