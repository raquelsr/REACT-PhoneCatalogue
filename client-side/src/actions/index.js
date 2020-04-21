import * as Types from './types';

export const showPhones = (phones) => ({
  type: Types.SHOW_PHONES,
  payload: phones
});

export const showPhoneDetails = (phone) => ({
  type: Types.SHOW_PHONE_DETAILS,
  payload: phone
})

export const dataRequest = ({type : Types.DATA_REQUEST});
export const dataSuccess = ({type : Types.DATA_SUCCESS});
export const dataFailure = (error) => ({
  type : Types.DATA_FAILURE,
  error
});