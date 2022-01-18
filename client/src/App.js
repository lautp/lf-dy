import React from 'react';
import Navbar from './components/layout/Navbar';
import CardsState from './context/cards/CardsState';

const App = () => {
	return (
		<CardsState>
			<div className="App">
				<Navbar />
			</div>
		</CardsState>
	);
};

export default App;
