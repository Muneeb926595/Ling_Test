import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {setFilteredUsers, setSearchedUser} from './AuthActions';
import * as JsonData from '../../leaderboard.json';
import {User} from '../redux/state';

export const searchUsers =
  (userName: string): ThunkAction<void, AppState, unknown, AnyAction> =>
  dispatch => {
    const users = Object.values(JsonData) as unknown as User[];
    const lowerCaseUserName = userName?.toLowerCase?.();

    const searchedUserData =
      users?.find?.(user =>
        user?.name?.toLowerCase?.()?.includes?.(lowerCaseUserName),
      ) || null;

    if (!searchedUserData) {
      alert(
        'This user name does not exist! Please specify an existing user name!',
      );
      return;
    }

    const sortedUsers = [...users]?.sort?.((a, b) => b?.bananas - a?.bananas);
    const topTenUsers = sortedUsers?.slice?.(0, 10);
    const userRank =
      sortedUsers?.findIndex?.(user => user?.uid === searchedUserData?.uid) + 1;

    if (userRank <= 10) {
      console.log('topTenUsers', topTenUsers);
      dispatch(setFilteredUsers(topTenUsers));
    } else {
      const updatedTopTenUsers = [
        ...topTenUsers?.slice?.(0, 9),
        searchedUserData,
      ];
      dispatch(setFilteredUsers(updatedTopTenUsers));
    }

    dispatch(setSearchedUser(searchedUserData));
  };
