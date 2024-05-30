import { useState, useEffect } from "react"

export default function Budget({ expenses }) {
    const [budget, setBudget] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [budgetInput, setBudgetInput] = useState('');
    const [totalExpenses, setTotalExpenses] = useState(0);

    const handleSubmit = (e) => {
        if (budgetInput > 0) {
            e.preventDefault();
            setBudget(parseFloat(budgetInput));
            setBudgetInput('');
        } else {
            alert('Please enter a valid budget.')
        }

    };

    useEffect(() => {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        setTotalExpenses(total);
        setRemaining(budget - total);
    }, [budget, expenses]);


    return (
        <div className="flex flex-col items-start justify-center  font-sans">
            <div className="text-3xl mt-4 px-4">Set Your Budget</div>
            <div className=" flex flex-col p-4 m-4 gap-4 bg-gray-200 border border-gray-500 rounded-lg">
                <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
                    <label className="font-medium">Set Budget:</label>
                    <input
                        type="number"
                        value={budgetInput}
                        onChange={(e) => setBudgetInput(e.target.value)}
                        className="bg-transparent border border-black rounded-sm p-1"
                        placeholder="Enter your budget"
                    />
                    <button type="submit" className="bg-blue-500 text-sm text-white px-2 py-1 rounded">Set</button>
                </form>
                <div className="p-4 bg-blue-200 border border-blue-500 rounded-md">Budget: ₹{budget}</div>
                <div className="p-4 bg-green-200 border border-green-500 rounded-md">Remaining: ₹{remaining}</div>
                <div className="p-4 bg-red-200 border border-red-500 rounded-md">Expense: ₹{totalExpenses}</div>
            </div>
        </div>
    )
}