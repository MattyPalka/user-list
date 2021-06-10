import { user } from "./user";

export interface RootState {
  users: UsersGlobalState;
}

export interface UsersGlobalState {
  allUsers: user[];
  filteredUsers: user[];
}
