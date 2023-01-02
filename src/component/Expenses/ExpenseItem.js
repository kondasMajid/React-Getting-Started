import ExpenseDate from "./ExpenseDate";
import React from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
export const ExpenseItem = (props) => {


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/*<div>{props.date.toLocaleDateString()}</div>*/}
            <div className="expense-item__description">
                <h2>{props.title} </h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;