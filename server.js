const express = require('express');
const { Server, Socket } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Sup mane' }));

// app.use('/api/sets', require('./routes/sets'));
app.use('/api/cards', require('./routes/cards'));

io.on('connection', socket => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('chat message', msg => {
		console.log('message: ' + msg);
	});
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
