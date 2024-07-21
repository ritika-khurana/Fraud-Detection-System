import React, { useState, useEffect } from 'react';
import './App.css';
//import Home from "./components/Home";
import TransactionTable from './components/TransactionTable';
import Alerts from './components/Alerts';
import TransactionInput from './components/TransactionInput';
import AlertInput from './components/AlertInput';
//import Blog from "./components/Blog";
//import Blog1 from "./components/Blog1";
//import Blog2 from "./components/Blog2";
//import ReportThreat from './components/ReportThreat';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { getTransactions, addTransaction } from './api';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'Alert 1: Unusual transaction detected.' },
    { id: 2, message: 'Alert 2: Balance below threshold.' },
  ]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const transactions = await getTransactions();
      setTransactions(transactions);
    };

    fetchTransactions();
  }, []);

  const handleAddTransaction = async (transaction) => {
    const newTransaction = await addTransaction(transaction);
    setTransactions([...transactions, newTransaction]);
  };

  const addAlert = (alert) => {
    setAlerts([...alerts, { ...alert, id: alerts.length + 1 }]);
  };

  return (
    /*<><BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog1t' element={<Blog1 />} />
          <Route path='/blog2' element={<Blog2 />} />
        </Routes>
      </div>
    </BrowserRouter>
    <div className="App">
        <header className="App-header">
          <h1>Transaction Monitor</h1>
        </header>*/
        <main>
          <section>
            <h2>Add Transaction</h2>
            <TransactionInput onAddTransaction={handleAddTransaction} />
          </section>
          <section>
            <h2>Transactions</h2>
            <TransactionTable transactions={transactions} />
          </section>
          <section>
            <h2>Add Alert</h2>
            <AlertInput onAddAlert={addAlert} />
          </section>
          <section>
            <h2>Alerts</h2>
            <Alerts alerts={alerts} />
          </section>
        </main>
    
  );
 
}

export default App;