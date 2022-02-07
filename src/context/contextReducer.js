const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "deleteTransaction":
            transactions = state.filter((transaction) => transaction.id !== action.payload)
            localStorage.setItem("transactions", JSON.stringify(transactions))
            return transactions
        case "addTransaction":
            transactions = [action.payload, ...state]
            localStorage.setItem("transactions", JSON.stringify(transactions))
            return transactions
        default:
            return state;
    }
}

export default contextReducer