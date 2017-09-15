import { createStore, combineReducers } from 'redux';
import extend from 'extend';
import page from './reducers/page.reducer';

const initialState = {
  loggedIn: false,
  disconnected: false,
}

const core = (state = initialState, action) => {
  const rs = extend(true, {}, state);
  switch(action.type){
    case 'CONNECT': {
      if (rs.disconnected) rs.disconnected = false;
      return rs;
    }
    case 'DISCONNECT': {
      rs.disconnected = true;
      rs.loggedIn = false;
      return rs;
    }
    case 'TOGGLE_LOGGED_IN': {
      rs.loggedIn = action.loggedIn;
      return rs;
    }
    default: {
      return rs;
    }
  }
}

//Combine all of the reducers, importing them using require
export const store = createStore(
  combineReducers({
    core,
    page,
  })
);
