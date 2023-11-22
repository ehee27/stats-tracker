import { useContext } from 'react'
import TransactionCard from './TransactionCard'
import { StatsContext } from '../context/StatsContext'

const GameLog = () => {
  const { games } = useContext(StatsContext)

  return (
    <div className="bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1">
      <div className="h-8 bg-white">
        <h3>Game Log</h3>
      </div>

      <div className="h-40 overflow-scroll">
        {games.games.map(item => {
          return (
            <TransactionCard
              key={item.id.id}
              date={item.id.date}
              hits={item.id.hits}
              atBats={item.id.atBats}
            />
          )
        })}
      </div>
    </div>
  )
}

export default GameLog
