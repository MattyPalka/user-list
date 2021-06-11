import React, { useState } from "react";
import { user } from "../../../types/user";
import style from "./style.module.scss";

const SingleUser = ({ user }: { user: user }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <li className={style.userListItem}>
      <div>
        {user.name} <span className={style.username}>@{user.username}</span>
      </div>
    </li>
  );
};

export default SingleUser;
