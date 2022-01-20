import React from 'react';
import Card from './Card';

const Pack = () => {
	return (
		<>
			<div className="container-fluid pb-5 pt-5">
				<div className="row col-12 d-flex justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="row mt-5 d-flex justify-content-center">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Pack;
