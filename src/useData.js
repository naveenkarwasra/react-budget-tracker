import { useContext } from "react"
import { ExpenseTrackerContext } from "./context/context"
import { incomeCategories, expenseCategories, resetCategories } from "./component/category"


const useData = (title) => {
    resetCategories()
    const { transactions } = useContext(ExpenseTrackerContext)
    const transactionType = transactions.filter((transaction) => transaction.type === title)
    const total = transactionType.reduce((acc, currVal) => acc += currVal.amount, 0)
    const categories = title === "Income" ? incomeCategories : expenseCategories
    transactionType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category)
        if (category) category.amount += t.amount
    });
    const filteredCategories = categories.filter((category) => category.amount > 0)


    const chartData = {
        labels: filteredCategories.map((category) => category.type),
        datasets: [{
            data: filteredCategories.map((category) => category.amount),
            backgroundColor: filteredCategories.map((category) => category.color),
        }],
    }
    return { filteredCategories, total, chartData }
}


export default useData