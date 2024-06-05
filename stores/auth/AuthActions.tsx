import { AuthActionTypes } from "../redux/actionTypes";
import { User } from "../redux/state";

export const setFilteredUsers = (users: User[]) => {
  return dispatch => {
    dispatch({
      type: AuthActionTypes.SET_FILTERED_USERS,
      payload: users
    });
  };
};

export const setSearchedUser = (user: User | null) => {
  return dispatch => {
    dispatch({
      type: AuthActionTypes.SET_SEARCHED_USER,
      payload: user
    });
  };
};

