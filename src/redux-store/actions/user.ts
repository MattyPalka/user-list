import axios from "axios";
import { Dispatch } from "redux";
import { SearchTypes } from "../../types/user";

export const SET_USERS = "SET_USERS";
export const FILTER_USERS = "FILTER_USERS";

/**
 * Get all user data and save it in redux state
 * @returns
 */
export const setUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      // this is fine here as the users collection has only 10 entries, if this was huge data set
      // would do it differently, to just fetch parts of data and then fetch again if wanted to get detail on single user
      // or just (depending on API / backend build for it) paginate the results and start fetching users based on filter field
      // this API however have just one endpoint and this implementation offers fast search results
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
 * @param {array} searchField what user data fields should we filter for
 * @returns
 */
export const filterUsers = (
  searchValue: string,
  searchFields: SearchTypes[]
) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: FILTER_USERS,
        searchValue: searchValue.trim(),
        searchFields,
      });
      return Promise.resolve("OK");
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
