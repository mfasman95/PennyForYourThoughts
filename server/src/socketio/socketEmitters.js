import { socketOut } from './../utility/logger';
import { io } from './../server';
import { EMIT_NAME } from './../utility/constants';

const emitter = (emitObj, socket) => {
  socket.emit(EMIT_NAME, emitObj);
  socketOut(`Event ${emitObj.eventName} sent to ${socket.id}`);
};
const emitToAll = (emitObj) => {
  io.sockets.emit(EMIT_NAME, emitObj);
  socketOut(`Event ${emitObj.eventName} sent to all sockets`);
};
const emitToRoom = (emitObj, room) => {
  io.to(room).emit(EMIT_NAME, emitObj);
  socketOut(`Event ${emitObj.eventName} sent to ${room}`);
};
const broadcastToRoom = (emitObj, room) => {
  io.to(room).broadcast(EMIT_NAME, emitObj);
  socketOut(`Event ${emitObj.eventName} sent to ${room}`);
};

// The base object sent via any emit
const makeEmitObj = eventName => data => Object.assign({}, { eventName, data: data || 'No Data Provided' });

// Emit to all sockets - emitter2('event')({data: 'someData'})('all') 
// Emit to single socket - emitter2('event')({data: 'someData'})('single')(socket); 
// Emit to full room - emitter2('event')({data: 'someData'})('room')('emit'); 
// Broadcast to full room - emitter2('event')({data: 'someData'})('room')('broadcast'); 

const emitter2 = (eventName) => {
  if (typeof eventName !== 'string') return false;
  return (data) => {
    if (typeof data !== 'object') return false;
    const emitObj = makeEmitObj(eventName)(data);
    return (emitTarget) => {
      switch (emitTarget) {
        case 'all': {
          socketOut(`Event ${emitObj.eventName} sent to all sockets`);
          return io.sockets.emit(EMIT_NAME, emitObj);
        }
        case 'single': {
          return (socket) => {
            socketOut(`Event ${emitObj.eventName} sent to ${socket.id}`);
            return socket.emit(EMIT_NAME, emitObj);
          };
        }
        case 'room': {
          return (room) => {
            if (typeof room !== 'string') return false;
            return (emitType) => {
              switch (emitType) {
                case 'emit': {
                  socketOut(`Event ${emitObj.eventName} sent to ${room}`);
                  return io.to(room).emit(EMIT_NAME, emitObj);
                }
                case 'broadcast': {
                  socketOut(`Event ${emitObj.eventName} sent to ${room}`);
                  return io.to(room).broadcast(EMIT_NAME, emitObj);
                }
                default: return false;
              }
            };
          };
        }
        default: return false;
      }
    };
  };
};

export default Object.freeze({
  cEmit: (eventName) => {
    if (typeof eventName !== 'string') return false;
    return (data) => {
      if (typeof data !== 'object') return false;
      return (socket) => {
        if (typeof socket !== 'object') return false;
        return emitter(makeEmitObj(eventName, data), socket);
      };
    };
  },
  cEmitToAll: eventName => data => emitToAll(makeEmitObj(eventName, data)),
  cEmitToRoom: eventName => data => room => emitToRoom(makeEmitObj(eventName, data), room),
  cBroadcastToRoom: eventName => data => room => broadcastToRoom(makeEmitObj(eventName, data), room),
});
