import React from "react";
import PlanDetailsStyle from "../../styled/PlanDetails.style";

const PlanDetails = (props) => {
  return (
    <PlanDetailsStyle width = {props.width}>
      <label className="planUses">Plan Uses</label>
      <div className="totalPlan">
        <div className="currentPlan"></div>
      </div>
    </PlanDetailsStyle>
  );
};

export default PlanDetails;
