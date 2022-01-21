import React, { useContext } from 'react';
import Card from './Card';
import CardsContext from '../../context/cards/cardsContext';

const Cardpool = () => {
	const cardsContext = useContext(CardsContext);
	const { cardpick, source } = cardsContext;

	return (
		<>
			<h1 className="d-flex justify-content-center">Card Pool</h1>
			<div className="container-fluid mt-5">
				<div className="row col-12 d-flex justify-content-center">
					<div className="col bg-light d-flex justify-content-center">T</div>
					<div className="col bg-light d-flex justify-content-center">1</div>
					<div className="col bg-light d-flex justify-content-center">2</div>
					<div className="col bg-light d-flex justify-content-center">3</div>
					<div className="col bg-light d-flex justify-content-center">B</div>
					<div className="col bg-light d-flex justify-content-center">Y</div>
					<div className="col bg-light d-flex justify-content-center">R</div>
				</div>
				<div className="row col-12 d-flex justify-content-center">
					<div className="col bg-light d-flex justify-content-center"></div>
					<div className="col bg-light d-flex justify-content-center">
						{cardpick !== null ? <Card source={source} /> : null}
					</div>
					<div className="col bg-light d-flex justify-content-center"></div>
					<div className="col bg-light d-flex justify-content-center"></div>
					<div className="col bg-light d-flex justify-content-center"></div>
					<div className="col bg-light d-flex justify-content-center"></div>
					<div className="col bg-light d-flex justify-content-center"></div>
					<div className="col bg-light d-flex justify-content-center"></div>
				</div>
			</div>
		</>
	);
};

export default Cardpool;
