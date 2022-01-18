// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// // @route   GET    api/cards
// // @desc    Get all sets
// // @access  Private
// router.get('/', async (req, res) => {
// 	try {
// 		const sets = await axios.get(`https://api.fabdb.net/cards?per_page=100`);
// 		res.json(sets);
// 	} catch (err) {
// 		console.error(err.message);
// 		res.status(500).send('Server Error');
// 	}
// });
