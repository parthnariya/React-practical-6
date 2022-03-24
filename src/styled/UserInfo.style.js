import styled from "styled-components";

const UserInfoStyle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .name {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  & .dot {
    font-size: 1.5rem;
    font-weight: 900;
    color: rgb(0, 182, 0);
  }
  & .email {
    font-size: 0.8rem;
    opacity: 0.6;
    margin: 0.2rem;
  }
  & .plan {
    font-size: 1rem;
    font-weight: 700;
    margin: 0.2rem;
    padding: 0.2rem;
  }
  & button {
    font-size: 1rem;
    font-weight: 600;
    border: none;
    outline: none;
    background-color: orange;
    padding: 0.5rem 2.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    color: white;
    /* margin-top: 10px; */
  }
`;

export default UserInfoStyle;
