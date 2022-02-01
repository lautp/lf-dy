import React, { useReducer } from 'react';
import {
	FILL_SLOT,
	GET_CARDS,
	PICK_CARD,
	GET_SRC,
	START,
	PACK,
} from '../types';
import axios from 'axios';
import cardsReducer from './cardsReducer';
import CardsContext from './cardsContext';

const CardsState = props => {
	const intitialState = {
		cards: '',
		cardpick: null,
		source: null,
		deck: [],
		started: false,
		pack: [],
		pool: [],
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
	const fillSlot = obj => {
		dispatch({ type: FILL_SLOT, payload: obj });
	};

	//Get source
	const getSource = src => {
		dispatch({
			type: GET_SRC,
			payload: src,
		});
	};

	//Start
	const start = () => {
		pack();
	};

	//Construct pack
	const pack = () => {
		for (let i = 0; i < 15; i++) {
			dispatch({
				type: PACK,
				payload:
					state.cards[0][Math.floor(Math.random() * state.cards[0].length)],
			});
		}
		dispatch({ type: START });
	};

	return (
		<CardsContext.Provider
			value={{
				cards: state.cards,
				cardpick: state.cardpick,
				source: state.source,
				deck: state.deck,
				started: state.started,
				pack: state.pack,
				pool: state.pool,
				getCards,
				pickCard,
				getSource,
				fillSlot,
				start,
			}}>
			{props.children}
		</CardsContext.Provider>
	);
};

export default CardsState;
