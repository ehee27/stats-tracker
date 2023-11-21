import { useContext } from 'react'
import TransactionCard from './TransactionCard'
import { StatsContext } from '../context/StatsContext'

const TransactionList = () => {
  const { transactions } = useContext(StatsContext)

  return (
    <div className="border-2 border-slate-200 rounded-lg w-[100%] h-46">
      <div className="h-8 pt-1 font-bold bg-white">
        <h3>Transaction List</h3>
      </div>

      <div className="h-40 overflow-scroll">
        {transactions.map(item => {
          return (
            <TransactionCard
              key={item.id}
              // date={item.date}
              hits={item.hits}
              atBats={item.atBats}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TransactionList
