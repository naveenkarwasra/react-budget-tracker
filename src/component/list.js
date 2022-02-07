import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";

const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)


    return (
        <div className="list-container">
            {transactions.map((transaction) => (
                <ul className="list" key={transaction.id}>
                    <li className={transaction.type === "Income" ? "list-icon-income list-icon" : "list-icon-expense list-icon"}>
                        <i class="fas fa-dollar-sign"></i>


                    </li>
                    <li className="list-content">
                       <div className="list-content-title">{transaction.category}</div>
                        {` $${transaction.amount} - ${transaction.date}`}
                    </li>
                    <li aria-label="delete" onClick="">
                        <button className="list-delete-btn"  aria-label="delete" onClick={() => deleteTransaction(transaction.id)}><i class="fas fa-trash"></i>
                        </button>
                    </li>

                </ul>
            ))}
        </div>

    )
}

export default List