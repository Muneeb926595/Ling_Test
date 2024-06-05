import {combineReducers} from 'redux';

import auth from '../auth/AuthReducers';

const Test = combineReducers({
  auth,
});

export default Test;
