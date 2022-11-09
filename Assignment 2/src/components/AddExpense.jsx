import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form } from "react-bootstrap";

export const AddExpense = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState("Salary");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
      category,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add Expense</h3>
      <form onSubmit={onSubmit}>
        <p className="fw-lighter">
          Add a (-) sign before the amount if it is an expense
        </p>
        <div className="input-group mb-3">
          <span className="input-group-text">Name</span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter expense name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter expense amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Category</span>

          <Form.Control
            as="select"
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              setCategory(e.target.value);
            }}
          >
            <option value="Income">Income</option>
            <option value="Housing">Housing</option>
            <option value="Grocery">Grocery</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </Form.Control>
        </div>

        <button className="add-button">Add Expense</button>
      </form>
    </>
  );
};
