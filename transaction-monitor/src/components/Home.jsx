import React from 'react'
import TransactionTable from './TransactionTable';
import Alerts from './Alerts';
import TransactionInput from './TransactionInput';
import AlertInput from './AlertInput';
import TransactionForm from './TransactionForm';
import Blog from "./Blog";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";


const Home = () =>  {
    return (
        <div>
            < TransactionTable/>
            <Alerts />
            <TransactionInput />
            <AlertInput/>
            <TransactionForm/>
           
        
        </div>
    );
}

export default Home
