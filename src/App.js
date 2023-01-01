import logo from './logo.svg';
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

import {ExpenseItem, expenseItem} from "./component/ExpenseItem"
function App() {
  return (
      <div>
          <ExpenseItem></ExpenseItem>

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
