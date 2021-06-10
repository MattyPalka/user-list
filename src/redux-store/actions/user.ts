import axios from "axios";
import { Dispatch } from "redux";

export const SET_USERS = "SET_USERS";

export const setUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(data)
      return dispatch({
        type: SET_USERS,
      });
    } catch (e) {}
  };
};
