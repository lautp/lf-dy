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
				<div className="row">
					<div className="col bg-secondary h5">T</div>
					<div className="col bg-secondary h5">1</div>
					<div className="col bg-secondary h5">2</div>
					<div className="col bg-secondary h5">3</div>
				</div>
			</div>

			<div className="container-fluid">
				<div className="row">
					<div className="container col-2  ">
						<div className="row d-inline flex-column position-absolute top-100">
							{cardurl.map((url, idx) => {
								const { src, pitch, keyword } = url;
								let counta = 0;
								if (idx !== 0) {
									counta++;
								}
								if (keyword === 'equipment' || keyword === 'hero') {
									return (
										<div
											key={idx}
											className={counta === 0 ? 'col-1' : 'col-1 cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</div>
					</div>
					<div className="container col-2  ">
						<div className="row d-inline flex-column position-absolute top-100">
							{cardurl.map((url, idx) => {
								const { src, pitch } = url;
								let countb = 0;
								if (idx !== 0) {
									countb++;
								}
								if (pitch === '1') {
									return (
										<div
											key={idx}
											className={countb === 0 ? 'col-1' : 'col-1 cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</div>
					</div>
					<div className="container col-2  ">
						<div className="row d-inline flex-column position-absolute top-100">
							{cardurl.map((url, idx) => {
								const { src, pitch } = url;
								let countc = 0;
								if (idx !== 0) {
									countc++;
								}
								if (pitch === '2') {
									return (
										<div
											key={idx}
											className={countc === 0 ? 'col-1' : 'col-1 cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</div>
					</div>
					<div className="container col-2 ">
						<div className="row d-inline flex-column position-absolute top-100">
							{cardurl.map((url, idx) => {
								const { src, pitch } = url;
								let countd = 0;
								if (idx !== 0) {
									countd++;
								}
								if (pitch === '3') {
									return (
										<div
											key={idx}
											className={countd === 0 ? 'col-1' : 'col-1 cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cardpool;

{
	/* <div className="container-fluid mt-5">
	<div className="row">
		<div className="col-3 bg-success">
			{cardurl.map((url, idx) => {
				const { src, pitch, keyword } = url;
				let counta = 0;
				if (idx !== 0) {
					counta++;
				}
				if (keyword === 'equipment' || keyword === 'hero') {
					return (
						<div key={idx} className={counta === 0 ? 'col-1' : 'col-1 cardy'}>
							<Card source={src} />
						</div>
					);
				}
			})}
		</div>
		<div className="col-3 bg-danger">
			{cardurl.map((url, idx) => {
				const { src, pitch } = url;
				let countb = 0;
				if (idx !== 0) {
					countb++;
				}
				if (pitch === '1') {
					return (
						<div key={idx} className={countb === 0 ? 'col-1' : 'col-1 cardy'}>
							<Card source={src} />
						</div>
					);
				}
			})}
		</div>
		<div className="col-3 bg-warning">
			{cardurl.map((url, idx) => {
				const { src, pitch } = url;
				let countc = 0;
				if (idx !== 0) {
					countc++;
				}
				if (pitch === '2') {
					return (
						<div key={idx} className={countc === 0 ? 'col-1' : 'col-1 cardy'}>
							<Card source={src} />
						</div>
					);
				}
			})}
		</div>
		<div className="col-3 bg-primary">
			{cardurl.map((url, idx) => {
				const { src, pitch } = url;
				let countd = 0;
				if (idx !== 0) {
					countd++;
				}
				if (pitch === '3') {
					return (
						<div key={idx} className={countd === 0 ? 'col-1' : 'col-1 cardy'}>
							<Card source={src} />
						</div>
					);
				}
			})}
		</div>
	</div>
</div>; */
}

{
	/* <table className="table">
				<thead className="bg-secondary">
					<tr>
						<th scope="col">T</th>
						<th scope="col">1</th>
						<th scope="col">2</th>
						<th scope="col">3</th>
					</tr>
				</thead>
				<tbody>
					<tr className="">
						<td className="bg-success  flex-column">
							{cardurl.map((url, idx) => {
								const { src, pitch, keyword } = url;
								let counta = 0;
								if (idx !== 0) {
									counta++;
								}
								if (keyword === 'equipment' || keyword === 'hero') {
									return (
										<div key={idx} className={counta === 0 ? '' : 'cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</td>
						<td className="bg-success  flex-column">
							{cardurl.map((url, idx) => {
								const { src, pitch, keyword } = url;
								let counta = 0;
								if (idx !== 0) {
									counta++;
								}
								if (pitch === '1') {
									return (
										<div key={idx} className={counta === 0 ? '' : ' cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</td>
						<td className="bg-success  flex-column">
							{cardurl.map((url, idx) => {
								const { src, pitch, keyword } = url;
								let counta = 0;
								if (idx !== 0) {
									counta++;
								}
								if (pitch === '2') {
									return (
										<div key={idx} className={counta === 0 ? '' : ' cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</td>
						<td className="bg-success  flex-column">
							{cardurl.map((url, idx) => {
								const { src, pitch, keyword } = url;
								let counta = 0;
								if (idx !== 0) {
									counta++;
								}
								if (pitch === '3') {
									return (
										<div key={idx} className={counta === 0 ? '' : ' cardy'}>
											<Card source={src} />
										</div>
									);
								}
							})}
						</td>
					</tr>
				</tbody>
			</table> */
}
