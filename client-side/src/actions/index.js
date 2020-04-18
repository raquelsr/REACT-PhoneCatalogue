import { SHOW_PHONES, SHOW_PHONE_DETAILS } from './types';

export const showPhones = (phones) => ({
  type: SHOW_PHONES,
  payload: phones
});

export const showPhoneDetails = (phone) => ({
  type: SHOW_PHONE_DETAILS,
  payload: phone
})