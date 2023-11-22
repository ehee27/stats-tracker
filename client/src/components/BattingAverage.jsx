// imported the context and destrcutured the 'games'
// *** comes as an object so NEED TO DRILL DOWN
import { useContext } from 'react'
import { StatsContext } from '../context/StatsContext'

const BattingAverage = () => {
  // destructured the context value
  const { games } = useContext(StatsContext)

  // reducing games to find hits and atBats - NOTICE THE CHAINING
  const atBats = games.games.reduce((acc, curr) => {
    return acc + curr.id.atBats
  }, 0)
  const hits = games.games.reduce((acc, curr) => {
    return acc + curr.id.hits
  }, 0)

  // create a current average var
  const currentAverage = (hits / atBats).toFixed(3).slice(2)

  return (
    <div className="bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1">
      <h3>Current AVG:</h3>
      <h2 className="font-bold text-5xl text-orange-400">{currentAverage}</h2>
    </div>
  )
}

export default BattingAverage
