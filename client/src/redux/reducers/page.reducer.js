import extend from 'extend';

const initialState = {
  page: 'MAIN',

}

export default function page (state=initialState, action) {
  const rs = extend(true, {}, state);
  switch (action.type) {
    case 'CHANGE_PAGE': {
      rs.page = action.page;
      return rs;
    }
    default: {
      return rs;
    }
  }
}