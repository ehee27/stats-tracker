// need the total atBats vs hits
import { useContext } from 'react'
import { StatsContext } from '../context/StatsContext'

const BattingAverage = () => {
  const { transactions } = useContext(StatsContext)

  const atBats = transactions.reduce((acc, curr) => {
    return acc + curr.atBats
  }, 0)
  const hits = transactions.reduce((acc, curr) => {
    return acc + curr.hits
  }, 0)

  const currentAverage = (hits / atBats).toFixed(3).slice(2)

  return (
    <div className="bg-white  rounded-lg p-10 w-[100%] shadow-md shadow-slate-400 my-2">
      <h3>Current AVG:</h3>
      <span className="font-bold text-4xl text-orange-400">
        {currentAverage}
      </span>
    </div>
  )
}

export default BattingAverage
