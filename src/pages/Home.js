import React from "react";
import Metrics from "../components/Metrics";
import Nav from "./Nav";
import RecentActivity from "../components/RecentActivity";

const Home = () => {
  const metricsData = {
    "Total Shares": "10",
    "Account Bal": 400000,
    "Loan Balance": 900000,
    Interest: 5000,
  };
  const recentActivity = [
    {
      amount: 35500.0,
      memberId: "DIH/0024",
      memberName: "NYIRINGANGO",
      transactionType: "interest",
      transactionDate: "2025-04-09T04:00:00.000Z",
      forLoanWithId: "LOA250412-LTIH0",
      transactionId: "INT250412-9DFI6",
    },
    {
      transactionDate: "2025-04-09T04:00:00.000Z",
      memberName: "NYIRINGANGO",
      transactionType: "loanRepay",
      memberId: "DIH/0024",
      forLoanWithId: "LOA250412-LTIH0",
      amount: 1000000.0,
      transactionId: "LOA250412-WYK5V",
    },
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
      forLoanWithId: "",
      memberId: "DIH/0024",
      transactionDate: "2025-02-11T05:00:00.000Z",
      transactionType: "interest",
      memberName: "NYIRINGANGO",
      transactionId: "INT250218-0ES8P",
      amount: 27500.0,
    },
    {
      memberId: "DIH/0024",
      transactionDate: "2025-02-11T05:00:00.000Z",
      forLoanWithId: "LO9-250125",
      amount: 27500.0,
      transactionId: "INT250412-DJ4EU",
      memberName: "NYIRINGANGO",
      transactionType: "interest",
    },
    {
      memberName: "NYIRINGANGO",
      memberId: "DIH/0024",
      forLoanWithId: "LO9-250125",
      transactionId: "LOA250412-7QVHC",
      transactionDate: "2025-02-11T05:00:00.000Z",
      transactionType: "loanRepay",
      amount: 1000000.0,
    },
    {
      status: "closed",
      DailyCummulativeinterest: "",
      amount: 1000000.0,
      duration: "",
      totalInterest: 0.0,
      interestPaid: 27500.0,
      transactionDate: "2025-01-24T21:00:00.000Z",
      loanType: "instant-loan",
      loanBalance: 0.0,
      memberId: "DIH/0024",
      rate: 0.05,
      memberName: "NYIRINGANGO",
      transactionType: "loans",
      pendingInterest: 0.0,
      transactionId: "LO9-250125",
      paid: 1000000.0,
      lastPayDate: "2025-02-11T05:00:00.000Z",
    },
    {
      transactionId: "SA100-040125",
      transactionType: "savings",
      transactionDate: "2025-01-03T21:00:00.000Z",
      amount: 10000.0,
      memberName: "NYIRINGANGO",
      memberId: "DIH/0024",
    },
    {
      amount: 31000.0,
      memberName: "NYIRINGANGO",
      transactionType: "interest",
      transactionId: "IN5-040125",
      memberId: "DIH/0024",
      transactionDate: "2025-01-03T21:00:00.000Z",
      forLoanWithId: "",
    },
    {
      transactionDate: "2025-01-03T21:00:00.000Z",
      transactionType: "loanRepay",
      amount: 1000000.0,
      memberName: "NYIRINGANGO",
      transactionId: "LO5-040125",
      memberId: "DIH/0024",
      forLoanWithId: "LO5-161224",
    },
  ];

  return (
    <>
      <Metrics metricsData={metricsData} />
      <RecentActivity recentActivity={recentActivity} />
      <Nav />
    </>
  );
};

export default Home;
