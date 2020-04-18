import axios from 'axios';
import { showPhones } from './index';

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