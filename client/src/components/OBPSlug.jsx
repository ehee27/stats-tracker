import { useContext } from 'react'
import { StatsContext } from '../context/StatsContext'

const OBPSlug = () => {
  const { games } = useContext(StatsContext)
  console.log('These are the games', games)

  // calculate totlas / slugging
  const atBats = games.games.reduce((acc, curr) => {
    return acc + curr.id.atBats
  }, 0)
  const singleBases = games.games.reduce((acc, curr) => {
    return acc + curr.id.singles
  }, 0)
  const doubleBases = games.games.reduce((acc, curr) => {
    return acc + curr.id.doubles
  }, 0)
  // const tripleBases = games.games.reduce((acc, curr) => {
  //   return (acc + curr.id.triples) * 3
  // }, 0)
  // const homerunBases = games.games.reduce((acc, curr) => {
  //   return (acc + curr.id.homeruns) * 4
  // }, 0)

  // const slugging = (parseInt(singleBases) + doubleBases * 2) / atBats
  console.log('atBats', atBats)
  console.log('single bases', singleBases)
  console.log('double bases', doubleBases)

  // console.log('slugging', slugging)

  // const sluggingPercentage = (slugging / atBats).toFixed(3).slice(2)

  return (
    <div className="flex gap-1 bg-white rounded-lg p-5 w-[100%] shadow-md shadow-gray-400 my-1">
      <div className="border-2 rounded-md flex flex-col justify-center items-center text-xl w-[100%] shadow-md shadow-gray-400">
        <p>OBP</p>
        <h2 className="font-bold text-3xl text-orange-400">000</h2>
      </div>
      <div className="border-2 rounded-md flex flex-col justify-center items-center text-xl w-[100%] shadow-md shadow-gray-400">
        <p>Slug</p>
        <h2 className="font-bold text-3xl text-orange-400">
          {/* {sluggingPercentage} */}
        </h2>
      </div>
    </div>
  )
}

export default OBPSlug
