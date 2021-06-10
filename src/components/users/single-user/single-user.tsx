import React from "react";
import { user } from "../../../types/user";
import style from "./style.module.scss";

const SingleUser = ({ user }: { user: user }) => {
  return (
    <li className={style.userListItem}>
      {user.name} <span className={style.username}>@{user.username}</span>
    </li>
  );
};

export default SingleUser;
