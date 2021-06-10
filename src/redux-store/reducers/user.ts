import { user } from "../../types/user";
import { SET_USERS } from "../actions/user";

interface action {
  type: string;
}

const initialUsers: { user?: user }[] = [];

const userReducer = (state = initialUsers, action: action) => {
  switch (action.type) {
    case SET_USERS:
      return [];
    default:
      return state;
  }
};

export default userReducer;
