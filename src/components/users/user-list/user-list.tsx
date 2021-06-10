import React from "react";
import { user } from "../../../types/user";
import SingleUser from "../single-user/single-user";
import style from "./style.module.scss";

const UsersList = ({ users }: { users: user[] }) => {
  // if there aren't any users fetched or no users with given search criteria inform user about that
  if (!users.length) {
    return <div className={style.noUsersFoundInfo}>No users found</div>;
  }
  return (
    <ol className={style.usersListContainer}>
      {users.map((user: user) => (
        <SingleUser key={user.id} user={user} />
      ))}
    </ol>
  );
};

export default UsersList;
