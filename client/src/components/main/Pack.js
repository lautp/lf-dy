import React from 'react';
import Card from './Card';

const Pack = () => {
	return (
		<>
			<div className="container-fluid pb-5 pt-5">
				<div className="row col-12 d-flex justify-content-center">
					<Card key="1" />
					<Card key="2" />
					<Card key="3" />
					<Card key="4" />
					<Card key="5" />
					<Card key="6" />
					<Card key="7" />
					<Card key="8" />
				</div>
				<div className="row col-12 mt-5 d-flex justify-content-center">
					<Card key="9" />
					<Card key="10" />
					<Card key="11" />
					<Card key="12" />
					<Card key="13" />
					<Card key="14" />
					<Card key="15" />
				</div>
			</div>
		</>
	);
};

export default Pack;
