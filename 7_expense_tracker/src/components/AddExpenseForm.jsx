// src/components/AddExpenseForm.jsx
import { useState } from 'react';

export default function AddExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash'); //default state is set to cash

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount > 0) {
      onAddExpense({ name, amount: parseFloat(amount), paymentMethod, id: Date.now() });
      setName('');
      setAmount('');
      setPaymentMethod('cash'); //default
    }
    else {
      alert("Please enter a valid expense name and amount. ");
    }

  };

  return (
    <div>
      <div className="text-3xl px-4">Add Your Expenses</div>
      <form onSubmit={handleSubmit} className="flex flex-col m-4  bg-gray-200 border border-gray-500 rounded-lg p-4 shadow-lg  mb-4">

        <div className='flex-col gap-4'>
          <div className='flex gap-4'>
            <div className="mb-2">
              <label className="block text-md p-1 font-semibold">Expense Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full bg-transparent border-black rounded-md"
                placeholder="Enter expense name"
              />
            </div>
            <div className="mb-2">
              <label className="block text-md p-1 font-semibold">Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 w-full bg-transparent border-black rounded-md"
                placeholder="Enter amount"
              />
            </div>
          </div>
          <div className="mb-2 ">
            <label className='block text-md p-1 font-semibold'>Payment Method:</label>
            <div className="flex items-center gap-4">
              <label className='flex items-center'>
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={() => setPaymentMethod('cash')}
                  className="mr-2"
                />
                Cash
              </label>
              <label className='flex items-center'>
                <input
                  type="radio"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="mr-2"
                />
                UPI
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Expense
        </button>
      </form>
    </div>
  );
}
