import React, { useState } from "react";
import { user } from "../../../types/user";
import style from "./style.module.scss";
import UserDetail from "../detail/user-detail";

const SingleUser = ({ user }: { user: user }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleUserDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <li className={style.userListItem}>
      <div className={style.userPreview}>
        {user.name}{" "}
        <span onClick={toggleUserDetail} className={style.username}>
          @{user.username}
        </span>
      </div>
      {showDetail && <UserDetail user={user} />}
    </li>
  );
};

export default SingleUser;
