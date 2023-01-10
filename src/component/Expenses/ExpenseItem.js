import ExpenseDate from "./ExpenseDate";
import React, {useState} from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
import {click} from "@testing-library/user-event/dist/click";
export const ExpenseItem = (props) => {
   const [title, seTitle] = useState(props.title)
    const [amt, Amt] =useState(props.amount);
    // let title = props.title;
    const clickHandler = () => {
        seTitle('Updated');
        console.log(title);
        Amt('200')
    }


    // const amount = () => {
    //    Amt('200')
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2> --  {title} </h2>
                <div className="expense-item__price">$ {amt}</div>
            </div>
            <button onClick={clickHandler}>Click to Edit</button>
        </Card>
    )
}
export default ExpenseItem;
