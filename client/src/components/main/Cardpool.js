import React, { useContext } from 'react';
import Card from './Card';
import CardsContext from '../../context/cards/cardsContext';
import '../cardpool.css';

const Cardpool = () => {
	const cardsContext = useContext(CardsContext);
	const { cardpick, pack, deck } = cardsContext;

	return (
		<>
			<div className="cardpool">
				<h1 className="d-flex justify-content-center">Card Pool</h1>

				<div className="container-fluid mt-5 ">
					<div className="row">
						<div className="col bg-secondary h5">T</div>
						<div className="col bg-danger h5">1</div>
						<div className="col bg-warning h5">2</div>
						<div className="col bg-primary h5">3</div>
					</div>
				</div>

				<div className="container-fluid ">
					<div className="row pool">
						<div className="container col-2 ">
							<div className="row d-inline flex-column position-absolute">
								{deck.map((url, idx) => {
									const { src, pitch, keyword } = url;
									let counta = 0;
									if (idx !== 0) {
										counta++;
									}
									if (pitch === '' || pitch === '0' || pitch === null) {
										return (
											<div key={idx} className="col-8 cardy">
												<Card source={src} />
											</div>
										);
									}
								})}
							</div>
						</div>
						<div className="container col-2  ">
							<div className="row d-inline flex-column position-absolute">
								{deck.map((url, idx) => {
									const { src, pitch, keyword } = url;
									let countb = 0;
									if (idx !== 0) {
										countb++;
									}
									if (pitch === '1') {
										return (
											<div key={idx} className="col-8 cardy">
												<Card source={src} />
											</div>
										);
									}
								})}
							</div>
						</div>
						<div className="container col-2  ">
							<div className="row d-inline flex-column position-absolute">
								{deck.map((url, idx) => {
									const { src, pitch, keyword } = url;
									let countc = 0;
									if (idx !== 0) {
										countc++;
									}
									if (pitch === '2') {
										return (
											<div key={idx} className="col-8 cardy">
												<Card source={src} />
											</div>
										);
									}
								})}
							</div>
						</div>
						<div className="container col-2 ">
							<div className="row d-inline flex-column position-absolute">
								{deck.map((url, idx) => {
									const { src, pitch, keyword } = url;
									let countd = 0;
									if (idx !== 0) {
										countd++;
									}
									if (pitch === '3') {
										return (
											<div key={idx} className="col-8 cardy">
												<Card source={src} />
											</div>
										);
									}
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cardpool;
