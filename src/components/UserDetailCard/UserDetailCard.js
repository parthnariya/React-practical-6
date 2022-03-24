import React from "react";
import { ProfilePicture } from "../../styled/ProfilePicture.style";
import UserDetailCardStyle from "../../styled/UserDetailCard.style";
import CountDetails from "./CountDetails";
import PlanDetails from "./PlanDetails";
import UserInfo from "./UserInfo";

const UserDetailCard = (props) => {
  const totalPlanCount = 5000;
  const currentPlanCount = Math.floor(Math.random() * (5000 - 1000) ) + 1000;
  const width= currentPlanCount*100/totalPlanCount;
  return (
    <UserDetailCardStyle>
      <ProfilePicture
        src={props.avatar}
        height="6.5rem"
        border="3.25rem"
        alt={props.name}
      />
      <UserInfo name={props.name} email={props.email}/>
      <PlanDetails width={`${width}%`}/>
      <CountDetails totalPlanCount = {totalPlanCount} currentPlanCount={currentPlanCount}/>
    </UserDetailCardStyle>
  );
};

export default UserDetailCard;
