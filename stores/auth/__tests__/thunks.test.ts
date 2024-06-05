import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {searchUsers} from '../methods';
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

describe('thunks', () => {
  it('should dispatch actions for a successful search', async () => {
    const store = mockStore({});

    const users = [mockUser];
    jest.spyOn(Object, 'values').mockReturnValue(users);

    await store.dispatch(searchUsers('Test') as any);

    const expectedActions = [
      setFilteredUsers([mockUser]),
      setSearchedUser(mockUser),
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should handle no matching user', async () => {
    const store = mockStore({});

    const users: User[] = [];
    jest.spyOn(Object, 'values').mockReturnValue(users);

    global.alert = jest.fn();

    await store.dispatch(searchUsers('Non Existent User') as any);

    expect(store.getActions()).toEqual([]);
    expect(global.alert).toHaveBeenCalledWith(
      'This user name does not exist! Please specify an existing user name!',
    );
  });
});
