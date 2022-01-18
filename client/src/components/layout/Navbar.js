import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CardsContext from '../../context/cards/cardsContext';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const cardsContext = useContext(CardsContext);
	const { getCards } = cardsContext;

	return (
		<>
			<nav className="navbar navbar-dark bg-secondary">
				<div className="container">
					<div className="row col-11">
						<a href="#!" className="navbar-brand h1 col-2">
							Live Fast Die Young
						</a>
						<button
							type="button"
							className="btn btn-outline-light col-1 offset-3"
							onClick={handleShow}>
							Draft
						</button>
						<p className="text-white col-1 h6 d-flex justify-content-center align-items-center">
							or
						</p>
						<button
							className="btn btn-outline-light col-1"
							onClick={handleShow2}>
							Sealed
						</button>
					</div>
				</div>
			</nav>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					I will not close if you click outside me. Don't even try to press
					escape key.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={getCards}>
						Start
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>

			<Modal
				show={show2}
				onHide={handleClose2}
				backdrop="static"
				keyboard={false}
				size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					I will not close if you click outside me. Don't even try to press
					escape key.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose2}>
						Close
					</Button>
					<Button variant="primary">Understood</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Navbar;