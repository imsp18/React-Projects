// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
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
    <div className="min-h-screen max-sm:flex-col flex justify-center gap-2 max-sm:items-center items-start mt-24">
      <Header expenses={expenses}/>
      <main className="p-4">
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} onRemove={removeExpense} />
      </main>
    </div>
  );
}
