import React from "react";
import UserListStyle from "../../styled/UserList.style";
import Header from "../Header/Header";
import UserCard from "./UserCard";
import {  useSelector } from "react-redux";
import PageNavigation from "../PageNavigation/PageNavigation";
import { MoonLoader } from "react-spinners";
import { override } from "../../styled/loading.style";
const UserList = () => {

  
  const users = useSelector((state) => state.user);
  return (
    <UserListStyle>
      <Header />

      <MoonLoader
        color={"orange"}
        loading={users.status === "loading"}
        css={override}
        size={50}
      />

      {users.status === "success" &&
        users.users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
          />
        ))}
      <PageNavigation/>
    </UserListStyle>
  );
};

export default UserList;
