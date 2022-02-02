import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CardsContext from '../../context/cards/cardsContext';

const Navbar = () => {
	const cardsContext = useContext(CardsContext);
	const { start, cards, loading, getSet } = cardsContext;

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const handleStart = () => {
		start();
		handleClose();
	};

	const handleSet = e => {
		getSet(e.target.innerHTML);
	};

	return (
		<>
			<nav className="navbar navbar-dark bg-secondary">
				<div className="container-fluid col-12">
					<div className="row col-12">
						<div className="col-1 d-flex justify-content-end">
							<a href="#!" className="navbar-brand h1 col-2">
								Live Fast Die Young
							</a>
						</div>
						{cards === '' ? (
							<div className="col-10 d-flex justify-content-center mt-1">
								<div className="spinner-border text-light me-3" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</div>
						) : (
							<div className="col-10 d-flex justify-content-center">
								<button
									type="button"
									className="btn btn-outline-light col-1 "
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
						)}
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
					<Modal.Title>Draft</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container">
						<div className="row d-flex justify-content-center">
							<Button variant="secondary col-3 my-3 mx-1" onClick={handleSet}>
								Welcome to Rathe
							</Button>
							<Button variant="secondary col-3 my-3 mx-1" onClick={handleSet}>
								Arcane Rising
							</Button>
							<Button variant="secondary col-3 my-3 mx-1" onClick={handleSet}>
								Crucible of War
							</Button>
						</div>
						<div className="row d-flex justify-content-center">
							<Button variant="secondary col-3 my-3 mx-1" onClick={handleSet}>
								Monarch
							</Button>
							<Button variant="secondary col-3 my-3 mx-1" onClick={handleSet}>
								Tales of Aria
							</Button>
							<Button variant="secondary col-3 my-3 mx-1" onClick={handleSet}>
								Everfest
							</Button>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					{loading ? (
						<div className="spinner-border text-secondary me-3" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					) : (
						<Button variant="secondary" onClick={handleStart}>
							Start
						</Button>
					)}
					<Button variant="danger" onClick={handleClose}>
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
					<Modal.Title>Sealed</Modal.Title>
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
