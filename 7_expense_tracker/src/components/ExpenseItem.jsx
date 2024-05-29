export default function ExpenseItem({ expense, onRemove }) {

    const handleRemove = () => {
        onRemove(expense.id);
    };

    return (
        <div className="flex items-center justify-between bg-white p-4 shadow mb-2 rounded">
            <div>{expense.name}</div>
            <div className="flex gap-3 items-center">
                <div className="text-blue-500">₹ {expense.amount}</div>
                <button onClick={handleRemove} className="text-sm px-2 py-1 bg-red-300 rounded-sm text-red-600 font-semibold border border-red-600">Remove</button>
            </div>
        </div>
    )
}