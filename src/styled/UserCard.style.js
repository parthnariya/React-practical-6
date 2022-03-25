import styled from "styled-components";

const UserStyle = styled.div`
  display: flex;
  height: auto;
  width: 55rem;
  margin: 0.2rem;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  & .active{
    color: green;
    padding-right: 2.3rem;
    margin-left: 0.5rem;
  }
  & .owner{
    padding-right: 0rem;
    margin-right: 2rem;
  }
`;
export const UserDetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.5rem;
  & h4 {
    display: inline;
    margin: 0.1rem;
    font-size: 0.9rem;
    padding: 0.1rem;
    font-weight: 500;
    opacity: 0.7;
  }
  & p {
    font-size: 0.9rem;
    display: block;
    margin: 0.1rem;
    padding: 0.1rem;
    opacity: 0.7;
    font-weight: 400;
  }
`;



export default UserStyle;
