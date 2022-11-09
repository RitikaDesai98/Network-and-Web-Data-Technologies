import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { PieChart } from "react-minimal-pie-chart";

export const Piechart = () => {
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

  const exp = parseInt(expense);
  const inc = parseInt(income);
  const bal = parseInt(total);

  return (
    <>
      <PieChart
        data={[
          { title: "Income", value: inc, color: "#d4edda" },
          { title: "Expense", value: exp, color: "#f8d7da" },
          { title: "Balance", value: bal, color: "#cce5ff" },
        ]}
        center={[50, 50]}
        lengthAngle={360}
        lineWidth={100}
        paddingAngle={0}
        radius={40}
        startAngle={0}
        viewBoxSize={[100, 100]}
        label={({ x, y, dx, dy, dataEntry }) => (
          <text
            x={x}
            y={y}
            dx={dx}
            dy={dy}
            text-anchor="middle"
            style={{
              fill: "#000000",
              fontSize: "5px",
            }}
          >
            <tspan x={x} y={y} dx={dx} dy={dy}>
              {dataEntry.title}
            </tspan>
            <tspan x={x} y={y + 5} dx={dx} dy={dy}>
              {dataEntry.value}
            </tspan>
          </text>
        )}
        labelPosition={65}        
      />
    </>
  );
};
