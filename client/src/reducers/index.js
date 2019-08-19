import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import stream from './stream';

export default combineReducers({
  auth,
  form,
  streams: stream
});
