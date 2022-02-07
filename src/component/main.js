import React, { useContext } from "react"
import { ExpenseTrackerContext } from "../context/context"
import "./detail.css"
import Form from "./form.js"
import List from "./list.js"


const Main = () => {
    let { balance } = useContext(ExpenseTrackerContext)
    
    if (balance < 0) {  
        balance = balance.toString().slice(1)           
        balance = "-" + "$" + balance        
    } else {
        balance = "$" + balance 
    }
    return (
        <div className="main">
            <h3>Expense Tracker</h3>
            <h4 className="main-card-total">Total Balance: {balance}</h4>
            <hr></hr>
            <Form />
            <List />
        </div>
    )
}

export default Main