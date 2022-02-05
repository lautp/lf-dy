import React, { useReducer } from 'react';
import {
	FILL_SLOT,
	GET_CARDS,
	PICK_CARD,
	GET_SRC,
	START,
	PACK,
	GET_SET,
	LOADING,
	GET_FORM,
	GET_INPUT,
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
		set: '',
		loading: false,
		form: '',
		input: '',
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
		const selected = state.cards[0].filter(card => {
			const found = card.printings.find(s => s.set === state.set);
			return found;
		});

		for (let i = 0; i < 15; i++) {
			dispatch({
				type: PACK,
				payload: selected[Math.floor(Math.random() * selected.length)],
			});
		}
		dispatch({ type: START });
	};

	//Get set
	const getSet = s => {
		dispatch({ type: LOADING, payload: true });
		dispatch({ type: GET_SET, payload: s });
		setTimeout(() => {
			dispatch({ type: LOADING, payload: false });
		}, 1000);
	};

	//Get form
	const getForm = () => {
		console.log('');
	};

	//Get input
	const getInput = () => {
		console.log('');
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
				set: state.set,
				loading: state.loading,
				form: state.form,
				input: state.input,
				getCards,
				pickCard,
				getSource,
				fillSlot,
				start,
				getSet,
				getForm,
				getInput,
			}}>
			{props.children}
		</CardsContext.Provider>
	);
};

export default CardsState;
