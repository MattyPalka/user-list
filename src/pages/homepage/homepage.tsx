import React from "react";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router";
import Search from "../../components/search/search";
import UsersList from "../../components/users/user-list/user-list";
import { RootState } from "../../types/root-redux-state";
import style from "./style.module.scss";

const Homepage = (props: RouteProps) => {
  // get filtered users stored in redux
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  
  return (
    <div className={style.homepageContainer}>
      <header>
        <h1>Users list</h1>
      </header>
      <Search />
      <UsersList users={users} />
    </div>
  );
};

export default Homepage;
