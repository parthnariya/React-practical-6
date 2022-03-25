import React from "react";
import { Lock, Trash } from "react-feather";
import { useDispatch } from "react-redux";
import { cardActions } from "../../store/detailcard-slice";
import DropDown from "../../styled/DropDown.style";
import UserStyle, {
  NameContainer,
  UserDetailsStyle,
} from "../../styled/UserCard.style";
import { ProfilePicture } from "../../styled/ProfilePicture.style";

const UserCard = (props) => {
  const dispatch = useDispatch();

  const mouseHoverhandler = () => {
    dispatch(cardActions.setUser({ email: props.email, name: props.name,avatar:props.avatar }));
  };
  const mouseLeavehandler = () => {
    dispatch(cardActions.removeUser())
  }

  const firstRow = (
    <>
      <div className="active">Active</div>
      <div className="owner">Owner</div>
      <Lock />
    </>
  );
  const restOfRows = (
    <>
      <DropDown>
        <option defaultChecked>Active</option>
        <option>Inactive</option>
      </DropDown>
      <DropDown>
        <option defaultChecked>Owner</option>
        <option>Read</option>
      </DropDown>
      <Trash />
    </>
  );
  return (
    <UserStyle>
      <UserDetailsStyle>
        <ProfilePicture
          src={props.avatar}
          alt=""
          onMouseEnter={mouseHoverhandler}
          onMouseLeave={mouseLeavehandler}
          height= '3rem'
          width='3rem'
        />
        <NameContainer>
          <h4>{props.name}</h4>
          <p>{props.email}</p>
        </NameContainer>
      </UserDetailsStyle>
      {props.id === 1 ? firstRow : restOfRows}
    </UserStyle>
  );
};

export default UserCard;
