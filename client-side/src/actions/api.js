import axios from 'axios';
import * as Actions from './index';

const URL = 'http://localhost:3001';

export const getPhones = () => {
  return (dispatch) => {
    dispatch(Actions.dataRequest);
    return axios.get(`${URL}/phones`)
      .then(response => {
        dispatch(Actions.dataSuccess);
        dispatch(Actions.showPhones(response.data));
      })
      .catch(error => {
        dispatch(Actions.dataFailure(error));
      });
  }
}

export const getPhoneById = (id) => {
  return (dispatch) => {
    dispatch(Actions.dataRequest);
    return axios.get(`${URL}/phones/${id}`)
      .then(response => {
        dispatch(Actions.dataSuccess);
        dispatch(Actions.showPhoneDetails(response.data));
      })
      .catch(error => {
        dispatch(Actions.dataFailure(error));
      });
  }
}