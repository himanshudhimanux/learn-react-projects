import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { FaCopy } from "react-icons/fa";

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copy, setCopy] = useState('Copy')


  const passwordGenerator = useCallback(() => {

    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTYZabcdefghijklmnopqrstyz"

    if (numAllowed) str += "1234567890"
    if (charAllowed) str += "~!@#%^&*()_+[]{}=-+?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)
    
  }, [length, numAllowed, charAllowed, setPassword ]);

  const passRef = useRef(null)

  const copyPassword = useCallback( () => {
      passRef.current?.select();
      window.navigator.clipboard.writeText(password).then(() => {
        setCopy('Copied')
      })
    },
    [password],
  )
  

 useEffect(() => {
  passwordGenerator()
 }, [length, numAllowed, charAllowed, passwordGenerator])
 

  return (
    <>

      <div className="app-heading text-center mt-10">
        <h1 className='text-white text-5xl font-medium'>Password Generator</h1>
      </div>

      <div className="passgen-container bg-white w-2/4 p-10 m-auto mt-28 rounded-lg">
        <div className="input-group flex align-center mb-5">
          <input type="text" className='w-4/5 border-black border px-4 rounded-tl-lg rounded-bl-lg' value={password} readOnly ref={passRef} />
          <button className='copy_btn bg-blue-500 py-3 px-8 flex align-center text-white' onClick={copyPassword} ><FaCopy /> {copy}</button>
        </div>
        <div className="input-flex flex align-center gap-5 justify-center">
          <div className="input-group">
            <input type="range" className='range_slider' value={length} min={8} max={20} onChange={(e) => setLength(e.target.value) }/>
            <label>Length {length}</label>
          </div>
          <div className="input-group"> 
            <label>
              <input type="checkbox" className='num' defaultChecked={numAllowed} onChange={() => {setNumAllowed((perv) => !perv)}} />
               Add Number
            </label>
          </div>
          <div className="input-group">  
            <label>
              <input type="checkbox" className='char' defaultChecked={charAllowed} 
                onChange={() => {
                  setCharAllowed((perv) => !perv)
                }}
              />
               Add Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
