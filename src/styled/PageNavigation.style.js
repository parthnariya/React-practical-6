import styled from "styled-components";

const PageNavigationStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  position: absolute;
  align-self: center;
  bottom: 10%;
  & .Button{
    background-color: whitesmoke;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
      height: 1.5rem;
      width: 1.5rem;
      padding: 0.2rem;
      margin: 0.2rem;
    
  }
`;
export default PageNavigationStyle;
