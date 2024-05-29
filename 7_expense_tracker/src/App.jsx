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
    <div className="min-h-screen flex flex-col items-center">
      <Header expenses={expenses}/>
      <main className=" mx-auto p-4">
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} onRemove={removeExpense} />
      </main>
    </div>
  );
}
