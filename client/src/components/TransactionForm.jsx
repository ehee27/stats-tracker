import { useState, useContext } from 'react'
import { StatsContext } from '../context/StatsContext'
import uuid from 'react-uuid'

const TransactionForm = () => {
  const { inputGameStats, transactions } = useContext(StatsContext)

  const [date, setDate] = useState('')
  const [hits, setHits] = useState(0)
  const [atBats, setAtBats] = useState(0)

  // const entryID = transactions.length + 1

  const handleUpload = e => {
    e.preventDefault()

    // create the entry object
    const gameEntry = {
      // id: uuid(),
      id: Math.random(),
      date,
      hits,
      atBats,
    }
    setHits(0)
    setAtBats(0)
    console.log('This is the gameEntry', gameEntry)
    console.log('Type of id', typeof gameEntry.id)

    new Date().toLocaleDateString().slice(0, 5)

    // call the input action
    inputGameStats(gameEntry)
  }
  // console.log('These are the game entries', transactions)
  // console.log('Total entries now', transactions.length)

  // const date = new Date().toLocaleDateString().slice(0, 5)
  console.log('This is the date', date)

  return (
    <div className="border-2 border-slate-500  rounded-lg p-10 w-[100%]">
      <form className="flex flex-col justify-center items-center">
        <input
          className="border-2 p-1 rounded mb-1"
          type="date"
          // placeholder="enter date (month/day)"
          value={date}
          onChange={e => setDate(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1"
          type="number"
          placeholder="stat"
          value={hits}
          onChange={e => setHits(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1"
          type="number"
          placeholder="amount"
          value={atBats}
          onChange={e => setAtBats(parseInt(e.target.value))}
        />
        <button
          onClick={handleUpload}
          className="border-2 bg-green-500 text-white p-2 rounded"
        >
          Upload Game Stats
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
