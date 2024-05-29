// src/components/AddExpenseForm.jsx
import { useState } from 'react';

export default function AddExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount > 0) {
      onAddExpense({ name, amount: parseFloat(amount), id: Date.now() });
      setName('');
      setAmount('');
    }
    else {
      alert("Please enter a valid expense name and amount. ");
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  bg-white p-4 shadow-lg rounded mb-4">
      <div className='flex gap-4'>
        <div className="mb-2">
          <label className="block text-sm">Expense Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter expense name"
          />
        </div>
        <div className="mb-2">
          <label className="block text-sm">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter amount"
          />
        </div></div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Expense
      </button>
    </form>
  );
}
