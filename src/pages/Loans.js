import React from "react";
import Nav from "./Nav";
import Metrics from "../components/Metrics";
import RecentActivity from "../components/RecentActivity";

const Loans = () => {
  const metricsData = {
    "Loan Balance": 900000,
    "Pending Interest": 50000,
  };
  const recentActivity = [
    {
      lastPayDate: "2025-04-09T04:00:00.000Z",
      paid: 1000000.0,
      loanType: "instant-loan",
      rate: 0.05,
      duration: "",
      totalInterest: 0.0,
      interestPaid: 35500.0,
      DailyCummulativeinterest: "",
      transactionId: "LOA250412-LTIH0",
      memberName: "NYIRINGANGO",
      loanBalance: 300000,
      memberId: "DIH/0024",
      transactionType: "loans",
      amount: 1000000.0,
      status: "active",
      transactionDate: "2025-03-13T04:00:00.000Z",
      pendingInterest: 3000,
    },
    {
      amount: 35500.0,
      memberId: "DIH/0024",
      memberName: "NYIRINGANGO",
      transactionType: "interest",
      transactionDate: "2025-04-09T04:00:00.000Z",
      forLoanWithId: "LOA250412-LTIH0",
      transactionId: "INT250412-9DFI6",
    },
  ];
  return (
    <>
      <Metrics metricsData={metricsData} />
      <button className="loans-button">APPLY FOR A NEW LOAN</button>
      <RecentActivity recentActivity={recentActivity} />
      <Nav />
    </>
  );
};

export default Loans;
