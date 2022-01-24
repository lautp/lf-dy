import React, { useContext } from 'react';
import Card from './Card';
import CardsContext from '../../context/cards/cardsContext';
import '../cardpool.css';

const Cardpool = () => {
	const cardsContext = useContext(CardsContext);
	const { cardpick, pack, cardurl } = cardsContext;

	return (
		<>
			<h1 className="d-flex justify-content-center">Card Pool</h1>
			<div className="container-fluid mt-5">
				<div className="row col-12">
					<div className="col-3 bg-light ">T</div>
					<div className="col-3 bg-light ">1</div>
					<div className="col-3 bg-light ">2</div>
					<div className="col-3 bg-light ">3</div>
				</div>
				<div className="row col-12">
					<div className="col d-flex flex-column"></div>
					<div className="col d-flex flex-column">
						{cardurl.map((url, idx) => {
							const { src, pitch } = url;
							let count = 0;
							if (idx !== 0) {
								count++;
							}
							if (pitch === '1') {
								return (
									<div
										key={idx}
										className={count === 0 ? 'col-1' : 'col-1 cardy'}>
										<Card source={src} />
									</div>
								);
							}
						})}
					</div>
					<div className="col d-flex flex-column">
						{cardurl.map((url, idx) => {
							const { src, pitch } = url;
							let count = 0;
							if (idx !== 0) {
								count++;
							}
							if (pitch === '2') {
								return (
									<div
										key={idx}
										className={count === 0 ? 'col-1' : 'col-1 cardy'}>
										<Card source={src} />
									</div>
								);
							}
						})}
					</div>
					<div className="col d-flex flex-column">
						{cardurl.map((url, idx) => {
							const { src, pitch } = url;
							let count = 0;
							if (idx !== 0) {
								count++;
							}
							if (pitch === '3') {
								return (
									<div
										key={idx}
										className={count === 0 ? 'col-1' : 'col-1 cardy'}>
										<Card source={src} />
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cardpool;
