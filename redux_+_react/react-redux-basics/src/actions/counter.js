export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const INCREMENT_COUNTER_BY_1 = 'INCREMENT_COUNTER_BY_1';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';


const actions = {
	decrease: (offset) => ({type: DECREMENT_COUNTER, payload: {offset}}),
	increase: (offset) => ({type: INCREMENT_COUNTER, payload: {offset}}),
	increaseBy1: () => ({type: INCREMENT_COUNTER_BY_1}),
}

export default actions;