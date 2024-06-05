import {AuthActionTypes} from './../redux/actionTypes';
import {AppState} from '../redux/state';

const INITIAL_STATE: AppState = {
  filteredUsers: [],
  searchedUser: null,
};
interface Action {
  payload: any;
  type: string;
}
const AuthReducer = (
  state: AppState = INITIAL_STATE,
  action: Action,
): AppState => {
  switch (action.type) {
    case AuthActionTypes.SET_FILTERED_USERS: {
      return {...state, filteredUsers: action.payload};
    }
    case AuthActionTypes.SET_SEARCHED_USER: {
      return {...state, searchedUser: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
