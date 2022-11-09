import React, { useState, useEffect } from "react";
import { History } from "./components/History";
import { Columns } from "./components/Columns";
import { AddExpense } from "./components/AddExpense";
import { Piechart } from "./components/Piechart";
import { GlobalProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.css";

function App() {
  return (
    <GlobalProvider>
      <h1>Expense Tracker</h1>
          <Piechart />
          <Columns />
          <History />
          <AddExpense />
    </GlobalProvider>
  );
}

export default App;
