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
      dispatch({
        type: SET_USERS,
        users: data,
      });
      return Promise.resolve("OK");
    } catch (e) {
      return Promise.reject(e);
    }
  };
};

/**
 * Filter list of all users by their name
 */
export const filterUsers = () => {};
