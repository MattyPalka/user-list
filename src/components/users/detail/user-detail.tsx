import React from "react";
import { getUrl } from "../../../commons/helpers/get-url";
import { user } from "../../../types/user";
import style from "./style.module.scss";

const UserDetail = ({ user }: { user: user }) => {
  return (
    <div className={style.userDetailContainer}>
      <div>
        <strong>email:</strong>{" "}
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <div>
        <strong>phone:</strong> <a href={`tel:${user.phone}`}>{user.phone}</a>
      </div>

      <div>
        <strong>website:</strong>{" "}
        <a
          href={`${getUrl(user.website)}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {user.website}
        </a>
      </div>
    </div>
  );
};

export default UserDetail;
