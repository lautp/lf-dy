import React, { useContext } from 'react';
import CardsContext from '../../context/cards/cardsContext';
import fabback from '../fab-back.png';
import '../card.css';

const Card = props => {
	const { source, pitch, rarity } = props;
	const cardsContext = useContext(CardsContext);
	const { pickCard, getSource, fillSlot } = cardsContext;
	const handleClick = e => {
		pickCard(e);
		if (e.target.attributes.rarity) {
			console.log(e);
		} else {
			console.log('no');
		}
		getSource(e.target.src);
	};
	const handlePick = e => {
		fillSlot({
			src: e.target.src,
			pitch: e.target.name,
			rarity: e.target.attributes[4].value,
		});
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
				name={pitch}
				rarity={rarity}
			/>
		</>
	);
};

export default Card;
