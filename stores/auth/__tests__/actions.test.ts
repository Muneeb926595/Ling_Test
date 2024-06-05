import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {AuthActionTypes} from '../../redux/actionTypes';
import {User} from '../../redux/state';
import {setFilteredUsers, setSearchedUser} from '../AuthActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockUser: User = {
  uid: 'testUid',
  bananas: 100,
  lastDayPlayed: '2021-01-01',
  longestStreak: 1,
  name: 'Test User',
  stars: 5,
  subscribed: true,
};

describe('actions', () => {
  it('should create an action to set filtered users', () => {
    const expectedAction = {
      type: AuthActionTypes.SET_FILTERED_USERS,
      payload: [mockUser],
    };

    const store = mockStore({});
    store.dispatch(setFilteredUsers([mockUser]));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should create an action to set searched user', () => {
    const expectedAction = {
      type: AuthActionTypes.SET_SEARCHED_USER,
      payload: mockUser,
    };

    const store = mockStore({});
    store.dispatch(setSearchedUser(mockUser));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should create an action to set searched user to null', () => {
    const expectedAction = {
      type: AuthActionTypes.SET_SEARCHED_USER,
      payload: null,
    };

    const store = mockStore({});
    store.dispatch(setSearchedUser(null));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});
