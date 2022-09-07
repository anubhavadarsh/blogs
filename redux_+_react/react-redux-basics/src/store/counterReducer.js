import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER_BY_1 } from "../actions/counter"

const initialState = {
	count: 0
}

const counterReducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT_COUNTER: 
			return {
				count: state.count + action.payload.offset,
			}

		case INCREMENT_COUNTER_BY_1:
			return {
				count: state.count + 1,
			}
		
		case DECREMENT_COUNTER:
			return {
				count: state.count - action.payload.offset,
			}

		default:
			return state
	}
}

export default counterReducer;