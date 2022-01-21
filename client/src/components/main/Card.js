import React, { useContext } from 'react';
import CardsContext from '../../context/cards/cardsContext';
import fabback from '../fab-back.png';
import '../card.css';

const Card = props => {
	const { source } = props;
	const cardsContext = useContext(CardsContext);
	const { pickCard, getSource } = cardsContext;
	const handleClick = e => {
		pickCard(e);
		getSource(e.target.src);
	};
	const handlePick = e => {
		e.target.remove();
	};

	return (
		<>
			<img
				src={source ? source : fabback}
				alt="flesh and blood card"
				className="col-1 "
				onClick={handleClick}
				onDoubleClick={handlePick}
			/>
		</>
	);
};

export default Card;
