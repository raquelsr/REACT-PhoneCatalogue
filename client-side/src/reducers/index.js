import { SHOW_PHONES, SHOW_PHONE_DETAILS } from '../actions/types';

const reducer = (state = '', action) => {
  switch (action.type) {
  case SHOW_PHONES:
    return {...state, phones: action.payload};
  case SHOW_PHONE_DETAILS:
    return {...state, phoneSelected: action.payload};
  default:
    return state;
  }
}

export default reducer;