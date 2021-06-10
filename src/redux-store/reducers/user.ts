import { UsersGlobalState } from "../../types/root-redux-state";
import { user } from "../../types/user";
import { SET_USERS } from "../actions/user";

interface action {
  type: string;
  users: user[];
}

const initialUsers: UsersGlobalState = {
  allUsers: [],
  filteredUsers: [],
};

const userReducer = (state = initialUsers, action: action) => {
  switch (action.type) {
    case SET_USERS:
      return { filteredUsers: action.users, allUsers: action.users };
    default:
      return state;
  }
};

export default userReducer;
