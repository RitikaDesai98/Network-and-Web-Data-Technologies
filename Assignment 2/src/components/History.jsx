import React, { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalState";

export const History = () => {
  const { transactions, deleteTransaction, categories } =
    useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className={transaction.category}>
            {transaction.name}
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              <FaRegTrashAlt />
            </button>
            <span className = {transaction.category}>
            {transaction.category}
            </span>
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
