import axios from "axios";
import { Dispatch } from "redux";

export const SET_USERS = "SET_USERS";
export const FILTER_USERS = "FILTER_USERS";

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
 * Filter all users for given chunk of user names
 * @param {string} searchValue values to filter for
 * @returns
 */
export const filterUsers = (searchValue: string) => {
  return async (dispatch: Dispatch<any>) =>
    dispatch({ type: FILTER_USERS, searchValue: searchValue.trim() });
};
