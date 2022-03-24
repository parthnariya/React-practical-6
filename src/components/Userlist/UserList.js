import React, { useEffect, useState } from "react";
import UserListStyle from "../../styled/UserList.style";
import Header from "../Header/Header";
import UserCard from "./UserCard";
// import UserListData from "../../Mocks/data";
import { useDispatch, useSelector } from "react-redux";
import PageNavigation from "../Footer/PageNavigation";
import { getUser } from "../../store/user-slice";
import { MoonLoader } from "react-spinners";
const UserList = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getUser(pageNumber));
  }, [dispatch, pageNumber]);

  const override = `
  position: absolute;
    top: 45%;
    left: 46%;
  margin: 0 auto;
  border-color: red;
`;
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
        users.users.data.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
            email={user.email}
          />
        ))}
      <PageNavigation pageHandler={(num) => setPageNumber(num)} />
    </UserListStyle>
  );
};

export default UserList;
