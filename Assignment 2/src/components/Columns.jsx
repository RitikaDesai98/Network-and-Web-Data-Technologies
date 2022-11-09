import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Columns = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  total: [
    { id: 1, title: "Income", value: income, color: "#985277" },
    { id: 2, title: "Expense", value: expense, color: "#5C374C" },
    { id: 3, title: "Balance", value: total, color: "#CE6A85" },
  ];

  return (
    <>
      <div className="container text-center">
        <div className="row align-items-end">
          <div className="col-sm item">
            <div className="alert alert-success">
              <div>Income:</div>
              <div>{income}</div>
            </div>
          </div>
          <div className="col-sm item">
            <div className="alert alert-danger">
              <div>Expense:</div>
              <div>{expense}</div>
            </div>
          </div>
          <div className="col-sm item">
            <div className="alert alert-primary">
              <div>Balance:</div>
              <div>{total}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
