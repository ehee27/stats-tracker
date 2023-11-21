// import { createContext, useReducer } from 'react'
// import AppReducer from './AppReducer/context'

// const initialState = {
//   transactions: [
//     { id: 1, title: 'entry01', data: 100 },
//     { id: 2, title: 'entry02', data: 100 },
//     { id: 3, title: 'entry03', data: 100 },
//     { id: 4, title: 'entry04', data: 100 },
//     { id: 5, title: 'entry05', data: 100 },
//   ],
// }

// // create context
// export const StatsContext = createContext(initialState)

// // create context provider
// export const StatsContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)

//   return (
//     <StatsContext.Provider value={{ transactions: state.transactions }}>
//       {children}
//     </StatsContext.Provider>
//   )
// }
