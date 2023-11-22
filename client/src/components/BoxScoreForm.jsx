import { useState, useContext } from 'react'
import { StatsContext } from '../context/StatsContext'

const BoxScoreForm = () => {
  const { inputGameStats } = useContext(StatsContext)
  // const [date, setDate] = useState('')
  const [atBats, setAtBats] = useState('')
  const [singles, setSingles] = useState('')
  const [doubles, setDoubles] = useState('')
  const [triples, setTriples] = useState('')
  const [homeruns, setHomeruns] = useState('')
  const [walks, setWalks] = useState('')

  const handleUpload = e => {
    e.preventDefault()

    // create the entry object
    const gameEntry = {
      // id: uuid(),
      id: Math.random(),
      atBats,
      singles,
      doubles,
      triples,
      homeruns,
      walks,
    }
    // call the input action
    inputGameStats(gameEntry)
  }

  return (
    <div className="bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1">
      <form className="flex flex-col justify-center items-center w-[100%]">
        <input
          className="border-2 p-1 rounded mb-1 w-[100%]"
          type="text"
          placeholder="At bats"
          value={atBats}
          onChange={e => setAtBats(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1 w-[100%]"
          type="text"
          placeholder="1B"
          value={singles}
          onChange={e => setSingles(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1 w-[100%]"
          type="text"
          placeholder="2B"
          value={doubles}
          onChange={e => setDoubles(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1 w-[100%]"
          type="text"
          placeholder="3B"
          value={triples}
          onChange={e => setTriples(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1 w-[100%]"
          type="text"
          placeholder="HR"
          value={homeruns}
          onChange={e => setHomeruns(parseInt(e.target.value))}
        />
        <input
          className="border-2 p-1 rounded mb-1 w-[100%]"
          type="text"
          placeholder="BB"
          value={walks}
          onChange={e => setWalks(parseInt(e.target.value))}
        />

        <button
          onClick={handleUpload}
          className="border-2 bg-green-500 text-white p-2 rounded w-[100%]"
        >
          Upload Game Stats
        </button>
      </form>
    </div>
  )
}

export default BoxScoreForm
