import React, { useState } from 'react';
import Form from './components/form.jsx';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (indexToRemove) => {
    setExpenses(expenses.filter((_, index) => index !== indexToRemove));
  };

  const filteredExpenses = filterDate
    ? expenses.filter((exp) => exp.date === filterDate)
    : expenses;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>

      <div className="flex gap-10 flex-wrap">
        {/* Form Section */}
        <Form onSubmit={handleAddExpense} />

        {/* Table Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <label className="text-gray-700">Search by Date:</label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="border rounded-md p-2 outline-none"
            />
            {filterDate && (
              <button
                onClick={() => setFilterDate('')}
                className="text-sm text-red-600 underline"
              >
                Clear
              </button>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-3">Expense List</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.length > 0 ? (
                filteredExpenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{expense.expenseName}</td>
                    <td className="border px-4 py-2">{expense.expenseCategory}</td>
                    <td className="border px-4 py-2">{expense.expenseDescription}</td>
                    <td className="border px-4 py-2">{expense.amount}</td>
                    <td className="border px-4 py-2">{expense.date}</td>
                    <td className="border px-4 py-2 text-center">
                      <button
                        onClick={() => handleDeleteExpense(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 py-4 border"
                  >
                    No expenses found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
