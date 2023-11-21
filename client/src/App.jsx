import './App.css'
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import TransactionForm from './components/TransactionForm'
import { StatsContextProvider } from './context/StatsContext'
import BattingAverage from './components/BattingAverage'

function App() {
  return (
    <StatsContextProvider>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <BattingAverage />
        <IncomeExpenses />
        <TransactionList />
        <TransactionForm />
      </div>
    </StatsContextProvider>
  )
}

export default App
