import React from 'react';
import fabback from '../fab-back.png';
import '../card.css';

const Card = () => {
	const handleClick = e => {
		e.target.className += 'clicked';
		console.log(e.target);
	};
	return (
		<>
			<a href="#!" onClick={handleClick} className="col-1 bg-primary">
				<img src={fabback} alt="flesh and blood cardback" />
			</a>
		</>
	);
};

export default Card;
