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
      <div className=' bg-gray-200 border m-4 border-gray-500 rounded-lg p-4 shadow-lg mb-2'>
        <div className='flex max-sm:flex-col'>
          <div className="p-2">
            <label className="block text-md p-1 font-semibold">Search Expenses:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="border p-2 w-full bg-transparent border-black rounded-md"
              placeholder="Search expenses"
            />
          </div>
          <div className="p-2">
            <label className="block text-md p-1 font-semibold">Filter by Payment Method:</label>
            <select value={paymentFilter} onChange={handleFilterChange} className="p-2 border border-black bg-transparent rounded">
              <option className='bg-transparent ' value="all" >All</option>
              <option className='bg-transparent ' value="cash">Cash</option>
              <option className='bg-transparent ' value="upi">UPI</option>
            </select>
          </div>
        </div>
        <div className='my-1 h-0.5 border-t bg-neutral-100'></div>
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
