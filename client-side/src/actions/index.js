import { SHOW_PHONES, SHOW_PHONE_DETAILS } from './types';
import { DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE } from './types';

export const showPhones = (phones) => ({
  type: SHOW_PHONES,
  payload: phones
});

export const showPhoneDetails = (phone) => ({
  type: SHOW_PHONE_DETAILS,
  payload: phone
})

export const dataRequest = ({type : DATA_REQUEST});
export const dataSuccess = ({type : DATA_SUCCESS});
export const dataFailure = (error) => ({
  type : DATA_FAILURE,
  error
});