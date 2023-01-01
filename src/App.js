import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

import {ExpenseItem, expenseItem} from "./component/ExpenseItem"
function App() {

 const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
  return (
      <div>
          <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
          <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
          <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
          <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

      </div>

  );
}


// class App extends React.Component {
//     render() {
//         return <h1>Deezy doing it</h1>
//     }
// }

function  Welcome(props){
    return <h1>Hello , {props.name}</h1>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const  element = < Welcome name='RXA'/>;
root.render(element)
export default App;
