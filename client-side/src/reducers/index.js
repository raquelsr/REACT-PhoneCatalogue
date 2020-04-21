import * as Types from '../actions/types';

const reducer = (state = '', action) => {
  switch (action.type) {
  case Types.DATA_REQUEST:
    return {...state, status: 'loading'};
  case Types.DATA_FAILURE:
    return {...state, status: 'error'};
  case Types.DATA_SUCCESS:
    return {...state, status: 'success'};
  case Types.SHOW_PHONES:
    return {...state, phones: action.payload};
  case Types.SHOW_PHONE_DETAILS:
    return {...state, phoneSelected: action.payload};
  default:
    return state;
  }
}

export default reducer;