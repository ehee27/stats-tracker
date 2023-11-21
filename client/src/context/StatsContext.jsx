import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
    { id: 1, date: '6/19', hits: 1, atBats: 4 },
    { id: 2, date: '6/20', hits: 0, atBats: 3 },
    { id: 3, date: '6/21', hits: 2, atBats: 4 },
    { id: 4, date: '6/22', hits: 1, atBats: 5 },
    { id: 5, date: '6/23', hits: 2, atBats: 3 },
  ],
}

// create context
export const StatsContext = createContext(initialState)

// create context provider
export const StatsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // ACTIONS
  const inputGameStats = (id, hits, atBats) => {
    dispatch({
      type: 'INPUT_GAME',
      payload: id,
      hits,
      atBats,
    })
  }

  return (
    <StatsContext.Provider
      value={{ transactions: state.transactions, inputGameStats }}
    >
      {children}
    </StatsContext.Provider>
  )
}
