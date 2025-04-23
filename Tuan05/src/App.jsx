import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chefify from './components/Chefify/Chefify'
import './components/Chefify/Chefify.css'
import ReactMemo from './components/ReactMemo'
import { UseReducer } from './components/useReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Chefify /> */}
      <ReactMemo />
      <UseReducer />
    </>
  )
}

export default App
