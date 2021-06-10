import { UsersGlobalState } from "../../types/root-redux-state";
import { user } from "../../types/user";
import { FILTER_USERS, SET_USERS } from "../actions/user";

interface action {
  type: string;
  users: user[];
  searchValue: string;
}

const initialUsers: UsersGlobalState = {
  allUsers: [],
  filteredUsers: [],
};

const userReducer = (state = initialUsers, action: action) => {
  switch (action.type) {
    case SET_USERS:
      return { filteredUsers: action.users, allUsers: action.users };
    case FILTER_USERS:
      const filterResult = state.allUsers.filter((user) =>
        new RegExp(action.searchValue, "gi").test(user.name)
      );
      return { ...state, filteredUsers: filterResult };
    default:
      return state;
  }
};

export default userReducer;
