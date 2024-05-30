  // src/components/ExpenseList.jsx
  import { useState } from 'react';
  import ExpenseItem from './ExpenseItem';

  export default function ExpenseList({ expenses, onRemove }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [paymentFilter, setPaymentFilter] = useState('all');

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    }
    const handleFilterChange = (e) => {
      setPaymentFilter(e.target.value);
    }

    const filteredExpenses = expenses.filter(expense => {
      const matchesSearch = expense.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = paymentFilter === 'all' || expense.paymentMethod ===  paymentFilter;
      return matchesFilter && matchesSearch;
    })



    return (
      <div>
        <div className='flex'>
          <div className="p-4">
            <label className="block text-md p-1 font-semibold">Search Expenses:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border p-2 w-full bg-transparent border-black rounded-md"
              placeholder="Search expenses"
            />
          </div>
          <div className="p-4">
            <label className="block text-md p-1 font-semibold">Filter by Payment Method:</label>
            <select value={paymentFilter} onChange={handleFilterChange} className="p-2 border border-gray-300 rounded">
              <option value="all">All</option>
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>
          </div>
        </div>
        {filteredExpenses.length > 0 ? (
        filteredExpenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} onRemove={onRemove} />
        ))
      ) : (
        <p className="text-center p-4">No expenses found.</p>
      )}
      </div>
    );
  }
