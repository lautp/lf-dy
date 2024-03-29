import {
	GET_CARDS,
	PICK_CARD,
	FILL_SLOT,
	GET_SRC,
	START,
	PACK,
	POOL,
	GET_SET,
	LOADING,
	GET_FORM,
	GET_INPUT,
} from '../types';
export default (state, action) => {
	switch (action.type) {
		case GET_CARDS:
			return {
				...state,
				cards: [...state.cards, action.payload],
			};
		case PICK_CARD:
			return {
				...state,
				cardpick: action.payload,
			};
		case GET_SRC:
			return {
				...state,
				source: action.payload,
			};
		case FILL_SLOT:
			return {
				...state,
				deck: [...state.deck, action.payload],
			};
		case START:
			return {
				...state,
				started: true,
			};
		case PACK:
			return {
				...state,
				pack: [...state.pack, action.payload],
			};
		case POOL:
			return {
				...state,
				pool: [...state.pool, action.payload],
			};
		case GET_SET:
			return {
				...state,
				set: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case GET_FORM:
			return {
				...state,
				form: action.payload,
			};
		case GET_INPUT:
			return {
				...state,
				input: action.payload,
			};
		default:
			return state;
	}
};
