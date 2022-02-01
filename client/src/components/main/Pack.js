import React, { useContext } from 'react';
import CardsContext from '../../context/cards/cardsContext';
import Card from './Card';
import '../pack.css';

const top = [1, 2, 3, 4, 5, 6, 7, 8];
const bot = [1, 2, 3, 4, 5, 6, 7];

const Pack = () => {
	const cardsContext = useContext(CardsContext);
	const { started, pack } = cardsContext;

	return (
		<>
			<div className="container-fluid pb-5 pt-5 pack">
				<div className="row col-12 d-flex justify-content-center">
					{started
						? top.map((num, idx) => {
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
				<div className="row col-12 mt-5 d-flex justify-content-center">
					{started
						? bot.map((num, idx) => {
								return (
									<Card
										key={idx + 8}
										id={idx + 8}
										source={pack[idx + 8].image}
										pitch={pack[idx + 8].stats.resource}
										rarity={pack[idx + 8].rarity}
										keyword={pack[idx + 8].keywords[1]}
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
