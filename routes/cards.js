const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route   GET    api/cards
// @desc    Get all cards
// @access  Public
router.get('/', async (req, res) => {
	try {
		const indexes = await axios.get('https://api.fabdb.net/cards?per_page=100');
		const indexed = indexes.data.meta.links;
		const index = indexed.length - 1;
		let cards = [];

		const getCard = async i => {
			const card = await axios.get(
				`https://api.fabdb.net/cards?per_page=100&page=${i}`
			);
			const pool = card.data.data;

			pool.map(arr => {
				cards = [...cards, arr];
			});
		};

		for (let i = 1; i < index; i++) {
			getCard(i);
		}

		setTimeout(() => {
			res.json(cards);
		}, 4000);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
