import React from "react";
import { useSelector } from "react-redux";
import UserDetailCard from "../components/UserDetailCard/UserDetailCard";
import UserList from "../components/Userlist/UserList";
import ContainerStyle from "../styled/Container.style";

const UserListContainer = (props) => {
  const user = useSelector((state) => state.card.user);
  return (
    <ContainerStyle>
      {user && (
        <UserDetailCard
          email={user.email}
          name={user.name}
          avatar={user.avatar}
        />
      )}
      <UserList />
    </ContainerStyle>
  );
};

export default UserListContainer;
