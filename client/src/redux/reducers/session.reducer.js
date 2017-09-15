const extend = require('extend');

const initialState = {
  name: undefined,
  room: undefined,
};

module.exports = {
  session: (state = initialState, action) => {
    let rs = extend(true, {}, state);
    switch (action.type) {
      case 'CLEAR_SESSION': { rs = initialState; break; }
      case 'SET_NAME': { rs.name = action.name; break; }
      case 'SET_ROOM': { rs.room = action.room; break; }
      default: { break; }
    }
    return rs;
  },
};
