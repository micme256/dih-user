import React from "react";
import Amount from "./Amount";

const BalCard = ({ metrics }) => {
  return (
    <div className="balance-card">
      <h1>KIU ALUMNI DIH SACCO</h1>
      <div className="balances">
        <div className="account-bal">
          <h1>Account Bal</h1>
          <Amount amount={metrics["Account Bal"]} />
        </div>
        <div className="total-shares">
          <h1>Total Shares</h1>
          <p>{metrics["Total Shares"]}</p>
        </div>
      </div>
      <div className="interest">
        <h1>Interest Earned</h1>
        <Amount amount={metrics["Interest"]} />
      </div>
    </div>
  );
};

export default BalCard;
