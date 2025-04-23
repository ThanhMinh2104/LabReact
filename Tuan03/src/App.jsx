import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator/Calculator'
import Chefify from './components/Chefify/Chefify'
import './components/Chefify/Chefify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chefify />
    </>
  )
}

export default App
