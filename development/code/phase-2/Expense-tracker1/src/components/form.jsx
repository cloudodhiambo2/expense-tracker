import React, { useState } from 'react';

export default function Form({ onSubmit }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const expense = {
      expenseName,
      expenseCategory,
      expenseDescription,
      amount,
      date,
    };
    onSubmit(expense); // Send data to parent
    // Clear the form
    setExpenseName('');
    setExpenseCategory('');
    setExpenseDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form
      onSubmit={submitForm}
      className="border flex flex-col p-5 rounded-md gap-5 w-[300px]"
    >
      <input
        onChange={(e) => setExpenseName(e.target.value)}
        value={expenseName}
        type="text"
        placeholder="Expense Name"
        className="border outline-none rounded-md p-3"
      />
      <input
        onChange={(e) => setExpenseCategory(e.target.value)}
        value={expenseCategory}
        type="text"
        placeholder="Expense Category"
        className="border outline-none rounded-md p-3"
      />
      <input
        onChange={(e) => setExpenseDescription(e.target.value)}
        value={expenseDescription}
        type="text"
        placeholder="Expense Description"
        className="border outline-none rounded-md p-3"
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        type="text"
        placeholder="Amount"
        className="border outline-none rounded-md p-3"
      />
      <input
        onChange={(e) => setDate(e.target.value)}
        value={date}
        type="date"
        className="border outline-none rounded-md p-3"
      />
      <button
        type="submit"
        className="bg-black p-4 rounded-md text-white"
      >
        Submit
      </button>
    </form>
  );
}