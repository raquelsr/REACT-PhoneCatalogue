import { SHOW_PHONES } from "./types";

export const showPhones = (data) => ({
    type: SHOW_PHONES, 
    payload: data
});
