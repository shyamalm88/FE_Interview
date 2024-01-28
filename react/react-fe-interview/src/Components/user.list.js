import React from "react";
import HOC from "./common/HOC";

const UserList = ({ data }) => {
  const renderUser = data.map((item) => {
    return <div key={item.id}>{item.name}</div>;
  });

  return <>{renderUser}</>;
};

const UserSeachList = HOC(UserList, "users");
export default UserSeachList;
