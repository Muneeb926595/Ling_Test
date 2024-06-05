// in this file import all of reducers and combine them

import {combineReducers} from 'redux';

import Test from '../redux/reducer';

const createReducer = (asyncReducers?: any) =>
  combineReducers({
    Test,
    ...asyncReducers,
  });

export default createReducer;
