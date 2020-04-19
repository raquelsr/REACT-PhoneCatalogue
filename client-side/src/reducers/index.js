import { SHOW_PHONES, SHOW_PHONE_DETAILS, DATA_REQUEST, DATA_FAILURE, DATA_SUCCESS } from '../actions/types';

const reducer = (state = '', action) => {
  switch (action.type) {
  case DATA_REQUEST:
    console.log('Cargando datos...');
    return {...state, status: 'loading'};
  case DATA_FAILURE:
    console.log('Error datos');
    return {...state, status: 'error'};
  case DATA_SUCCESS:
    console.log('Sucess');
    return {...state, status: 'success'};
  case SHOW_PHONES:
    return {...state, phones: action.payload};
  case SHOW_PHONE_DETAILS:
    return {...state, phoneSelected: action.payload};
  default:
    return state;
  }
}

export default reducer;