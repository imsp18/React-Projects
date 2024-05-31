// src/App.jsx
import { useState } from 'react';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div className="min-h-screen max-sm:flex-col flex mx-10 gap-2 max-sm:items-center items-start">
      <div className='p-2'>
        <Budget expenses={expenses} />
        <AddExpenseForm onAddExpense={handleAddExpense} />
      </div>
      <div className="flex justify-start items-start ">
        <ExpenseList expenses={expenses} onRemove={removeExpense} />
      </div>
    </div>
  );
}
