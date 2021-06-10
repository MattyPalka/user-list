import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterUsers } from "../../redux-store/actions/user";
import style from "./style.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  useEffect(() => {
    dispatch(filterUsers(value));
  }, [value]);
  return (
    <div className={style.container}>
      <label>Search by user name...</label>
      <input
        className={style.searchInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
