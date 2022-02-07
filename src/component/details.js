import React from "react"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import useData from "../useData"
import "./detail.css"
Chart.register(ArcElement, Tooltip, Legend)



const Details = ({ title }) => {
    const { total, chartData } = useData(title)


    return (
        <div className={title === "Income" ? "income" : "expense"}>
            <div className="card-content">
                <header title={title}>{title}</header>
                <h5>${total}</h5>
                <div className="chart-data" >
                    <Doughnut data={chartData} />
                </div>
            </div>
        </div>
    )
}

export default Details