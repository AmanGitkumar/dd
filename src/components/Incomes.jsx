import React, { useState } from "react";
import "./Incomes.css";

const Incomes = () => {
    const [incomes, setIncomes] = useState([
        { id: 1, source: "Salary", amount: 50000, date: "2025-02-27" },
        { id: 2, source: "Freelancing", amount: 15000, date: "2025-02-26" },
        { id: 3, source: "Investments", amount: 10000, date: "2025-02-25" },
    ]);

    return (
        <div className="incomes-container">
            <h2>Incomes</h2>
            <table className="incomes-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Source</th>
                        <th>Amount (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {incomes.map((income) => (
                        <tr key={income.id}>
                            <td>{income.date}</td>
                            <td>{income.source}</td>
                            <td>₹{income.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Incomes;
