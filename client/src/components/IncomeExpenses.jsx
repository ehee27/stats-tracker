const IncomeExpenses = () => {
  return (
    <div className="flex gap-1 bg-white rounded-lg p-5 w-[100%] my-2 shadow-md shadow-slate-400">
      <div className="border-2 rounded-md flex flex-col justify-center items-center text-xl font-bold w-[100%] shadow-md">
        <p>Income</p>
        <p>0:00</p>
      </div>
      <div className="border-2 rounded-md flex flex-col justify-center items-center text-xl font-bold w-[100%] shadow-md">
        <p>Expense</p>
        <p>0:00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
