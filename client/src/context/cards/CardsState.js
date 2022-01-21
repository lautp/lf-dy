import React, { useReducer } from 'react';
import { FILL_SLOT, GET_CARDS, PICK_CARD, GET_SRC } from '../types';
import axios from 'axios';
import cardsReducer from './cardsReducer';
import CardsContext from './cardsContext';

const CardsState = props => {
	const intitialState = {
		cards: [],
		cardpick: null,
		source: null,
	};

	const [state, dispatch] = useReducer(cardsReducer, intitialState);

	//Get all cards
	const getCards = async () => {
		const res = await axios.get('/api/cards');
		dispatch({ type: GET_CARDS, payload: res.data });
	};

	//Pick card
	const pickCard = target => {
		dispatch({ type: PICK_CARD, payload: target });
	};

	//Fill slot
	const fillSlot = () => {
		dispatch({ type: FILL_SLOT, payload: state.cardpick });
	};

	//Get source
	const getSource = src => {
		dispatch({
			type: GET_SRC,
			payload:
				'https://icv2.com/images/article_thumbs/650x650_c0e607185665683f2610f5bb9a04d8ccd0e47b06307dd6b6b624d2d4.jpg',
		});
	};
	return (
		<CardsContext.Provider
			value={{
				cards: state.cards,
				cardpick: state.cardpick,
				source: state.source,
				getCards,
				pickCard,
				getSource,
			}}>
			{props.children}
		</CardsContext.Provider>
	);
};

export default CardsState;
