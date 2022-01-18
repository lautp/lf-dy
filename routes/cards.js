const express = require('express');
const router = express.Router();
const axios = require('axios');

// @route   GET    api/cards
// @desc    Get all cards
// @access  Public
router.get('/', async (req, res) => {
	try {
		const cards = await axios.get(`https://api.fabdb.net/cards?per_page=100`);
		res.json(cards.data.meta.links.data);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
