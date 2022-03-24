import React from "react";
import CountDetailsStyle from "../../styled/CountDetails.style";

const CountDetails = (props) => {
  return (
    <CountDetailsStyle>
      <div className="reviewed">
        <div className="click1">{props.currentPlanCount}</div>
        <div className="clickText1">clicks reviewed</div>
      </div>
      <div className="verticalLine"></div>
      <div className="monthsClicks">
        <div className="click2">{props.totalPlanCount}</div>
        <div className="clicktext2">Monthly clicks</div>
      </div>
    </CountDetailsStyle>
  );
};

export default CountDetails;
