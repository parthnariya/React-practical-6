import styled from "styled-components";
const PlanDetailsStyle = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  & .planUses {
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 0.2rem;
    padding-top: 0.3rem;
  }
  & .totalPlan {
    height: 0.3rem;
    width: 100%;
    background-color: rgba(245, 202, 122, 0.3);
    margin-top: 8px;
  }
  & .currentPlan {
    height: 0.3rem;
    width: ${props => props.width};
    background-color: orange;
  }
`;
export default PlanDetailsStyle;
