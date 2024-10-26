import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState('olive');

  const handleColorChange = (event) => {
    setColor(event.target.value); // Update state with selected color
  };

  return (
    <>
      <div className="flex align-center justify-center m-auto h-screen w-100" style={{ backgroundColor: color }}>
        <h1 className='font-semibold text-5xl'>Background Color Changer {color}</h1>
      </div>
      <div className="btns-container">
        <button className='bg-red-700' onClick={() => setColor('red')}>Red</button>
        <button className='bg-green-700' onClick={() => setColor('green')}>Gree</button>
        <button className='bg-blue-700' onClick={() => setColor('blue')}>Blue</button>

        <input type="color" className='colorinput' onChange={handleColorChange} />

      </div>
    </>
  )
}

export default App
