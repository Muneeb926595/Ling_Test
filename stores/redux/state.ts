export interface User {
  uid: string;
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
}

declare global {
  interface AppState {
    filteredUsers: User[];
    searchedUser: User | null;
  }
}
export {AppState};
