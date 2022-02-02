import React, { useContext } from 'react';
import CardsContext from '../../context/cards/cardsContext';
import Card from './Card';
import '../pack.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Pack = () => {
	const cardsContext = useContext(CardsContext);
	const { started, pack } = cardsContext;

	return (
		<>
			<div className="container-fluid pack">
				<div className="row col-12 d-flex justify-content-center">
					{started
						? items.map((num, idx) => {
								return (
									<Card
										key={idx}
										id={idx}
										source={pack[idx].image}
										pitch={pack[idx].stats.resource}
										rarity={pack[idx].rarity}
										keyword={pack[idx].keywords[1]}
									/>
								);
						  })
						: null}
				</div>
			</div>
		</>
	);
};

export default Pack;
