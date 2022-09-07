const redux = require('redux');

const initialState = {
	counter: 0
}

const reducerFn = (state = initialState, action) => {
	return {
		...initialState
	}
};

const store = redux.createStore(reducerFn);