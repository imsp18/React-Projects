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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
}
