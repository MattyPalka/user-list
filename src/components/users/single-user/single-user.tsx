import React from "react";
import { user } from "../../../types/user";
import style from "./style.module.scss";

const SingleUser = ({ user }: { user: user }) => {
  return <div>{user.username}</div>;
};

export default SingleUser;
