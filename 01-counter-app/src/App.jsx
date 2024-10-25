
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

   const [counter, setCounter] = useState(100)

  const addNumber = () => {
    setCounter(counter + 1)
  }

  const removeNumber = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello World Counter {counter}</h1>
      <div style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center'}}>
        <button onClick={addNumber}>Add Number</button>
        <button onClick={removeNumber}>Remove Number</button>
      </div>
    </>
  )
}

export default App
