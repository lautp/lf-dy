import React, { useEffect, useContext, useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import CardsContext from '../../context/cards/cardsContext';
import Pack from '../main/Pack';
import Cardpool from '../main/Cardpool';
import '../main.css';
import '../../../node_modules/socket.io/client-dist/socket.io.js';
const Main = () => {
	const cardsContext = useContext(CardsContext);
	const { getCards } = cardsContext;

	useEffect(() => {
		getCards();
	}, []);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const toggleShow = () => setShow(s => !s);

	// const form = document.getElementsByClassName('form');
	// const input = document.getElementsByClassName('input');

	// form.addEventListener('submit', e => {
	// 	e.preventDefault();
	// 	if (input.value) {
	// 		socket.emit('chat mesage', input.value);
	// 		input.value = '';
	// 	}
	// });

	return (
		<div>
			<Button
				variant="primary"
				onClick={toggleShow}
				className="position-absolute end-0 mt-2 me-3 ps-3 pe-3 rounded-pill"
				size="sm">
				Chat
			</Button>
			<Pack />

			<Cardpool />

			<Offcanvas show={show} onHide={handleClose} scroll={true}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Chat Room</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div>
						<ul className="messages"></ul>
						<form className="form" action="">
							<input className="input" autocomplete="off" />
							<button>Send</button>
						</form>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default Main;
