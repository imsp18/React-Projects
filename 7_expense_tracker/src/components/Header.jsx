export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center  font-sans">
            <div className="text-3xl mt-4">Expense Tracker App</div>
            <div className=" flex p-4 m-4 gap-4 bg-gray-200 border border-gray-500 rounded-lg">
                <div className="p-4 bg-blue-200 border border-blue-500 rounded-md">Budget: ₹{ }</div>
                <div className="p-4 bg-green-200 border border-green-500 rounded-md">Remaining: ₹{ }</div>
                <div className="p-4 bg-red-200 border border-red-500 rounded-md">Expense: ₹{ }</div>
            </div>
        </div>
    )
}