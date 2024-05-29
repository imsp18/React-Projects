// src/components/ExpenseList.jsx
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
}
