import React, { useEffect, useContext } from 'react';
import CardsContext from '../../context/cards/cardsContext';
import Pack from '../main/Pack';
import '../main.css';

const Main = () => {
	const cardsContext = useContext(CardsContext);
	const { getCards } = cardsContext;

	useEffect(() => {
		getCards();
	}, []);

	return (
		<div>
			<Pack />
		</div>
	);
};

export default Main;
