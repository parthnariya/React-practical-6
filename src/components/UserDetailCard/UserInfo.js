import React from "react";
import UserInfoStyle from "../../styled/UserInfo.style";

const UserInfo = (props) => {
  return (
    <UserInfoStyle>
      <p className="name">
        {props.name}
        <span className="dot">&#729;</span>
      </p>
      <p className="email">{props.email}</p>
      <p className="plan">Your Plan: Standard</p>
      <button>Active User</button>
    </UserInfoStyle>
  );
};

export default UserInfo;
