import { createContext, useEffect, useState } from 'react'

// set an initialState object - only single 'games' array
const initialState = {
  games: [],
}

// value of 'games' state calls this function
const getInitialState = () => {
  // ternary checks games which checks localStorage
  const games = localStorage.getItem('games')
  return games ? JSON.parse(games) : initialState
}

// create context
export const StatsContext = createContext()

// create context provider
export const StatsContextProvider = ({ children }) => {
  // games state gets initial value from function, which gets value from localStorage
  const [games, setGames] = useState(getInitialState)

  // checks localStorage
  useEffect(() => {
    localStorage.setItem('games', JSON.stringify(games))
  }, [games])

  // ACTIONS
  const inputGameStats = (
    id,
    atBats,
    singles,
    doubles,
    triples,
    homeruns,
    walks
  ) => {
    const newGame = {
      id,
      atBats,
      singles,
      doubles,
      triples,
      homeruns,
      walks,
    }
    setGames(prev => ({
      ...prev,
      games: [...prev.games, newGame],
    }))
  }

  return (
    <StatsContext.Provider value={{ games, inputGameStats }}>
      {children}
    </StatsContext.Provider>
  )
}
