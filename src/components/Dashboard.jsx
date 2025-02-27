import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const totalBalance = 45000;
    const totalIncome = 70000;
    const totalExpenses = 25000;

    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: 50000, date: "2025-02-27" },
        { id: 2, type: "Expense", category: "Rent", amount: 15000, date: "2025-02-26" },
        { id: 3, type: "Income", category: "Freelancing", amount: 20000, date: "2025-02-25" },
        { id: 4, type: "Expense", category: "Groceries", amount: 5000, date: "2025-02-24" },
    ];

    return (
        <div className="dashboard-container">
            <h1>Finance Dashboard</h1>
            
            <div className="summary-cards">
                <div className="card balance">
                    <h3>Total Balance</h3>
                    <p>₹{totalBalance}</p>
                </div>
                <div className="card income">
                    <h3>Total Income</h3>
                    <p>₹{totalIncome}</p>
                </div>
                <div className="card expenses">
                    <h3>Total Expenses</h3>
                    <p>₹{totalExpenses}</p>
                </div>
            </div>

            <div className="transactions">
                <h2>Recent Transactions</h2>
                <table className="transactions-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Amount (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className={transaction.type.toLowerCase()}>
                                <td>{transaction.date}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.type}</td>
                                <td>₹{transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="dashboard-actions">
                <Link to="/incomes" className="dashboard-btn income-btn">View Incomes</Link>
                <Link to="/expenses" className="dashboard-btn expenses-btn">View Expenses</Link>
            </div>
        </div>
    );
};

export default Dashboard;
