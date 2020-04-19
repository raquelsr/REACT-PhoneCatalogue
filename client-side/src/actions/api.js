import axios from 'axios';
import { showPhones, showPhoneDetails } from './index';
import { dataRequest, dataFailure, dataSuccess } from './index';

const URL = 'http://localhost:3001';

export const getPhones = () => {
  return (dispatch) => {

    dispatch(dataRequest);
    console.log('Cargando getphones');
    setTimeout(() => {
      return axios.get(`${URL}/phones`)
        .then(response => {
          dispatch(dataSuccess);
          dispatch(showPhones(response.data));
        })
        .catch(error => {

          console.log(error);
          dispatch(dataFailure(error));
        });
    }, 5000);
  }
}

export const getPhoneById = (id) => {
  return (dispatch) => {

    dispatch(dataRequest);
    console.log('cargando');
    setTimeout(() => {
      return axios.get(`${URL}/phones/${id}`)
        .then(response => {
          dispatch(dataSuccess);
          dispatch(showPhoneDetails(response.data));
        })
        .catch(error => {
          dispatch(dataFailure(error));
        });
    }, 5000);
  }
}