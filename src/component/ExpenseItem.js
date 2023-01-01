
import React from "react";
import './ExpenseItem.css'
export function ExpenseItem(){
    const expenseDate = new Date();
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 293.33;
    return (
        <div className="expense-item">
            <div>{expenseDate.toLocaleDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle} </h2>
                <div className="expense-item__price">$ {expenseAmount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem;
