import axios from "axios";
import { Dispatch } from "redux";

export const SET_USERS = "SET_USERS";

/**
 * Get all user data and save it in redux state
 * @returns
 */
export const setUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return dispatch({
        type: SET_USERS,
        users: data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

/**
 * Filter list of all users by their name
 */
export const filterUsers = () => {};
