import { UsersGlobalState } from "../../types/root-redux-state";
import { SearchTypes, user } from "../../types/user";
import { FILTER_USERS, SET_USERS } from "../actions/user";

interface action {
  type: string;
  users: user[];
  searchValue: string;
  searchFields: SearchTypes[];
}

const initialUsers: UsersGlobalState = {
  allUsers: [],
  filteredUsers: [],
};

const userReducer = (state = initialUsers, action: action) => {
  switch (action.type) {
    case SET_USERS:
      // at start filtered users === all users
      return { filteredUsers: action.users, allUsers: action.users };
    case FILTER_USERS:
      const filterResult = state.allUsers.filter((user) =>
        // check if searched values are at least in one of fields we are filtering for
        // case-insensitive
        action.searchFields.some((searchField) =>
          new RegExp(action.searchValue, "gi").test(user[searchField])
        )
      );
      return { ...state, filteredUsers: filterResult };
    default:
      return state;
  }
};

export default userReducer;
