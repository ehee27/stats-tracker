import './App.css'
import Header from './components/Header'
import OBPSlug from './components/OBPSlug'
import GameLog from './components/GameLog'
import BoxScoreForm from './components/BoxScoreForm'
import { StatsContextProvider } from './context/StatsContext'
import BattingAverage from './components/BattingAverage'

function App() {
  return (
    <StatsContextProvider>
      <div className="flex flex-col justify-center items-center w-80">
        <Header />
        <BattingAverage />
        <OBPSlug />
        <GameLog />
        <BoxScoreForm />
      </div>
    </StatsContextProvider>
  )
}

export default App
