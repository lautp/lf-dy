const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Sup mane' }));

// app.use('/api/sets', require('./routes/sets'));
app.use('/api/cards', require('./routes/cards'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
