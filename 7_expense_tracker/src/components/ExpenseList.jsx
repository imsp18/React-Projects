// src/components/ExpenseList.jsx
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onRemove }) {
  return (
    <div>
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} onRemove={onRemove} />
      ))}
    </div>
  );
}
