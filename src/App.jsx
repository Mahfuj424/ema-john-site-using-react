import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/shops/Shop'

function App() {

  return (
    <div className="App">
      <Header />
      <Shop/>
    </div>
  )
}

export default App
