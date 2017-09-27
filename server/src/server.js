const path = require('path');
const { log } = require('./utility/logger');
const { DEFAULT_PORT } = require('./utility/constants');
const express = require('express');

exports.PORT = process.env.PORT || process.env.NODE_PORT || DEFAULT_PORT;

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use('/', express.static(path.join(__dirname, './../../client/build')));
app.get('/test', (req, res) => res.send(`<h1>${req.url}</h1>`));

const { setEventHandlers } = require('./socketio/socketHandlers');

io.on('connection', (socket) => {
  setEventHandlers(socket);
  socket.on('test', data => io.sockets.emit('test', data));
});

const serverCallback = () => log(`Server is listening at localhost:${exports.PORT}`);
exports.serverObj = server.listen(exports.PORT, serverCallback);
exports.io = io;

const readline = require('readline');

if ((process.platform === 'win32' || process.platform === 'win64') && process.env.NODE_ENV !== 'test') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('(WINDOWS) Press enter to kill this process...\n', () => {
    log('Emitting SIGINT to the process...\n');
    process.emit('SIGINT');
  });
}
process.on('SIGINT', () => {
  log('Gracefully shutting down QueueServer.js...');
  // graceful shutdown
  process.exit();
});

