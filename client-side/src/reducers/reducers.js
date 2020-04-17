import { SHOW_PHONES } from "../actions/types";

const reducer = (state = '', action) => {
    switch (action.type) {
        case SHOW_PHONES:
            return {...state, phones: action.payload};
        default:
            return state;
    }
}

export default reducer;