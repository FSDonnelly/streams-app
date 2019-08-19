import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  isSignedIn: null
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false
      };
    default:
      return state;
  }
}
