export default function ExpenseItem({ expense, onRemove }) {

    const handleRemove = () => {
        onRemove(expense.id);
    };

    return (
        <div className="flex items-center justify-between bg-gray-200 border m-4 border-gray-500 rounded-lg p-4 shadow-lg mb-2">

            <div className="flex-col items-start justify-between">
                <div>{expense.name}</div>
                {expense.paymentMethod === 'cash' ?
                    <span className="bg-green-100 text-green-800 text-[10px] font-medium me-2 p-1 rounded dark:bg-green-900 dark:text-green-300">Cash Payment</span> : <span className="bg-blue-100 text-blue-800 text-[10px] font-medium me-2 p-1 rounded dark:bg-blue-900 dark:text-blue-300">UPI Payment</span>}
            </div>
            <div className="flex gap-3 items-center">
                <div className="text-blue-500">₹ {expense.amount}</div>
                <button onClick={handleRemove} className="text-sm bg-red-300 rounded-sm text-red-600 font-semibold border border-red-600"><svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg></button>
            </div>
        </div>
    )
}