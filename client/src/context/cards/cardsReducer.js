import { GET_CARDS } from '../types';
export default (state, action) => {
	switch (action.type) {
		case GET_CARDS:
			return {
				...state,
				cards: action.payload,
			};

		default:
			return state;
	}
};
