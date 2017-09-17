const path = require('path');
const { log } = require('./utility/logger');
const { DEFAULT_PORT } = require('./utility/constants');

const PORT = process.env.PORT || process.env.NODE_PORT || DEFAULT_PORT;

const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, './../../client/build')));
app.get('/test', (req, res) => res.send(`<h1>${req.url}</h1>`));

const server = require('http').createServer(app).listen(PORT, () => log(`Server is listening on port ${PORT}`));

const io = require('socket.io')(server);
const socketHandlers = require('./utility/socketHandlers');

socketHandlers.init(io);

app.get('/', (req, res) => res.send(`<h1>${req.url}</h1>`));

io.on('connection', socket => socketHandlers.setEventHandlers(socket));
