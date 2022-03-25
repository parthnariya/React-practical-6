import styled from "styled-components";
const CountDetailsStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  & .click1 .click2{
    font-size: 20px;
    font-weight: 800;
  }
  & .clicktext2 .clicktext1{
    font-size: 11px;
    opacity: 0.6;
  }
  & .verticalLine{
    border: 0.2px solid rgba(0, 0, 0, 0.2);
  }
`;
export default CountDetailsStyle;
