import axios from 'axios';
import { showPhones, showPhoneDetails } from './index';

const URL = 'http://localhost:3001';

export const getPhones = () => {
  return (dispatch) => {
    return axios.get(`${URL}/phones`)
      .then(response => {
        dispatch(showPhones(response.data));
      })
      .catch(error => {
        dispatch({
          type: 'DATA_FAILED',
          payload: error
        });
      });
  }
}

export const getPhoneById = (id) => {
  return (dispatch) => {
    return axios.get(`${URL}/phones/${id}`)
      .then(response => {
        dispatch(showPhoneDetails(response.data));
      })
      .catch(error => {
        dispatch({
          type: 'DATA_FAILED',
          payload: error
        });
      });
  }
}