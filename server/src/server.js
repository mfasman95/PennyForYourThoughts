const path = require('path');
const { socketOut, error, log } = require('./utility/logger');
const { DEFAULT_PORT } = require('./utility/constants');
const express = require('express');

const PORT = process.env.PORT || process.env.NODE_PORT || DEFAULT_PORT;

const app = express();
const server = require('http').Server(app);

const io = require('socket.io')(server);

app.use('/', express.static(path.join(__dirname, './../../client/build')));
app.get('/test', (req, res) => res.send(`<h1>${req.url}</h1>`));

const { setEventHandlers } = require('./utility/socketHandlers');

io.on('connection', (socket) => {
  setEventHandlers(socket);
  socket.on('test', data => io.sockets.emit('test', data));
});

const serverCallback = () => log(`Server is listening at localhost:${PORT}`);
exports.start = server.listen(PORT, serverCallback);

exports.emitter = (props) => {
  if (!props.socket) error('No socket provided in props for emitter function', props);
  if (!props.eventName) error('Missing event name in props for emitter function', props);
  props.socket.emit('ServerEmit', { eventName: props.eventName, data: props.data || 'No Data Provided' });
  socketOut(`Event ${props.eventName} sent to ${props.socket.id}`);
};
exports.emitToAll = (props) => {
  if (!props.eventName) error('Missing event name in props for emitter function', props);
  io.sockets.emit('ServerEmit', { eventName: props.eventName, data: props.data || 'No Data Provided' });
  socketOut(`Event ${props.eventName} sent to ${props.room}`);
};
exports.emitToRoom = (props) => {
  if (!props.room) error('No socket provided in props for emitter function', props);
  if (!props.eventName) error('Missing event name in props for emitter function', props);
  io.to(props.room).emit('ServerEmit', { eventName: props.eventName, data: props.data || 'No Data Provided' });
  socketOut(`Event ${props.eventName} sent to ${props.room}`);
};
