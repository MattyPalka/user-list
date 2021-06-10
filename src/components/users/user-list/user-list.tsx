import React from "react";
import { user } from "../../../types/user";
import SingleUser from "../single-user/single-user";
import style from "./style.module.scss";

const UsersList = ({ users }: { users: user[] }) => {
  return (
    <ol>
      {users.map((user: user) => (
        <SingleUser key={user.id} user={user} />
      ))}
    </ol>
  );
};

export default UsersList;
