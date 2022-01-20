import React from 'react';
import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';
import CardsState from './context/cards/CardsState';

const App = () => {
	return (
		<CardsState>
			<div className="App">
				<Navbar />
				<Main />
			</div>
		</CardsState>
	);
};

export default App;
