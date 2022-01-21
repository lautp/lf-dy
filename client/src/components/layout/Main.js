import React, { useEffect, useContext } from 'react';
import CardsContext from '../../context/cards/cardsContext';
import Pack from '../main/Pack';
import Cardpool from '../main/Cardpool';
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
			<Cardpool />
		</div>
	);
};

export default Main;
