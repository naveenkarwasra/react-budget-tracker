import React, { useState, useContext } from "react"
import { ExpenseTrackerContext } from "../context/context"
import { v4 as uuidv4 } from "uuid"
import { incomeCategories, expenseCategories } from "./category"


const initialState = {
    amount: "",
    category: "",
    type: "",
    date: new Date()
}
const Form = () => {
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const [formData, setFormData] = useState(initialState)
    const selectedCategory = formData.type === "Income" ? incomeCategories : expenseCategories
    const createTransaction = () => {
        addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() })
        setFormData(initialState)
    }

    return (
        <div className="content form">
            <form className="form-input">
                <select className="form-select" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                    <option value="" hidden className="light-text">Type</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <select className="form-select" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    <option value="" hidden className="light-text">Category</option>
                    {selectedCategory.map((category) => <option key={category.type} value={category.type}>{category.type}</option>)}
                </select>
            </form>
            <div className="form-input">
                <input type="number" placeholder="Amount" step={10} className="form-select form-row2" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                <input type="date" placeholder="Date" className="form-select form-row2 date-select" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
            </div>
            <div>
                <button className="create-btn" onClick={createTransaction} >Create</button>
            </div>
        </div>
    )
}


export default Form