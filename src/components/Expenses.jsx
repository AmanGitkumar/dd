import React, { useState } from "react";
import "./Expenses.css";

const Expenses = () => {
    const [expenses, setExpenses] = useState([
        { id: 1, category: "Food", amount: 500, date: "2025-02-27" },
        { id: 2, category: "Transport", amount: 300, date: "2025-02-26" },
        { id: 3, category: "Entertainment", amount: 700, date: "2025-02-25" },
    ]);

    return (
        <div className="expenses-container">
            <h2>Expenses</h2>
            <table className="expenses-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Amount (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.date}</td>
                            <td>{expense.category}</td>
                            <td>₹{expense.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Expenses;
