import React from "react"
import Details from "./component/details"
import Footer from "./component/footer"
import Main from "./component/main.js"

const App = () => {
  return (
    <div className="page-wrapper">

      <div className="detail-card">
        <div className="card data-display-card">
          <Details title="Income" />
        </div>
        <div className="card form-display-card">
          <Main />
        </div>
        <div className="card data-display-card">
          <Details title="Expense" />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default App