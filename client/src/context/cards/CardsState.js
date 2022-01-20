import React, { useReducer } from 'react';
import { GET_CARDS } from '../types';
import axios from 'axios';
import cardsReducer from './cardsReducer';
import CardsContext from './cardsContext';

const CardsState = props => {
	const intitialState = {
		cards: [],
	};

	const [state, dispatch] = useReducer(cardsReducer, intitialState);

	//Get all cards
	const getCards = async () => {
		const res = await axios.get('/api/cards');
		dispatch({ type: GET_CARDS, payload: res.data });
	};
	return (
		<CardsContext.Provider
			value={{
				cards: state.cards,
				getCards,
			}}>
			{props.children}
		</CardsContext.Provider>
	);
};

export default CardsState;
