const { createStore, combineReducers } = require('redux');
const extend = require('extend');

// Reducers
const { page } = require('./reducers/page.reducer');
const { session } = require('./reducers/session.reducer');

const initialState = {
  loggedIn: false,
  disconnected: true,
  inGame: false,
  rooms: {
  },
};

const core = (state = initialState, action) => {
  const rs = extend(true, {}, state);
  switch (action.type) {
    case 'CONNECT': { if (rs.disconnected) rs.disconnected = false; break; }
    case 'DISCONNECT': {
      rs.disconnected = true;
      rs.loggedIn = false;
      break;
    }
    case 'TOGGLE_LOGGED_IN': { rs.loggedIn = action.loggedIn; break; }
    default: { break; }
  }
  return rs;
};

// Combine all of the reducers, and convert them into a store
module.exports = { store: createStore(combineReducers({ core, page, session })) };
