export default function ExpenseItem({ expense }) {
    return (
        <div className="flex justify-between bg-white p-4 shadow mb-2 rounded">
            <div>{expense.name}</div>
            <div className="text-red-500">₹ {expense.amount}</div>
        </div>
    )
}