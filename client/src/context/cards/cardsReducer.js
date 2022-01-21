import { GET_CARDS, PICK_CARD, FILL_SLOT, GET_SRC } from '../types';
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
				slot1: action.payload,
			};
		default:
			return state;
	}
};
