import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  height: auto;
  width: 55rem;
  margin: 0.2rem;
  /* background-color: aqua; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  opacity: 0.7;
  & .Name{
      padding-left: 0.5rem;
      padding-right: 20.6rem;
      /* width: 10.5rem; */
  }
  & .Status{
    /* padding-left: 1.4rem;
    padding-right: 8rem; */
    padding-right: 2.3rem;
    margin-left: 0.5rem;
  }
  & .Access{
    padding-right: 0rem;
    margin-left: 9.5rem;
  }
`;
export default HeaderStyle
