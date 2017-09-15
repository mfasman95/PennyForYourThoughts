const extend = require('extend');

const initialState = {
  page: 'JOIN_GAME',
};

module.exports = {
  page: (state = initialState, action) => {
    const rs = extend(true, {}, state);
    switch (action.type) {
      case 'CHANGE_PAGE': { rs.page = action.page; break; }
      default: { break; }
    }
    return rs;
  },
};
