import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  isSignedIn: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: payload
      };
    default:
      return state;
  }
}
