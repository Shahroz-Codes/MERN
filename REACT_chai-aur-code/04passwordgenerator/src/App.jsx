import { useState, useCallback, useRef, useEffect } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [Generate, setGenerate] = useState(false)

  //useRef hook
  const passRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "123456789"
    if (CharAllowed) str += "~!@#$%^&*()_+{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, CharAllowed, setPassword])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, CharAllowed, PasswordGenerator, Generate])

  const copyPasswordtoClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div
        className=' flex flex-wrap flex-row justify-center bg-gray-600 w-full h-dvh p-2 '>
        <div className='bg-white  p-3 rounded-2xl h-fit'>
          <h1 className="text-center text-2xl font-medium font-sans text-white bg-slate-800 p-3 rounded-2xl">Password Generator in React JS</h1>
          <div
            className=" mt-3 p-3  bg-blue-950 rounded-2xl text-white">
            <div className='flex flex-wrap flex-row justify-center shadow rounded-lg  gap-3 overflow-hidden mb-4'>
              <input
                type="text"
                value={password}
                className="outline-none rounded-xl w-full py-1 px-3 bg-slate-600"
                placeholder='Password'
                readOnly
                ref={passRef}
              />
              <button
                className='outline-none bg-blue-700 rounded-xl text-white px-3 py-2 shrink-0 hover:bg-amber-300 hover:text-black'
                onClick={copyPasswordtoClipboard}
              >Copy</button>
              <button
                className='outline-none rounded-xl bg-slate-700 text-white px-3 py-2 shrink-0 hover:bg-amber-300 hover:text-black'
                onClick={() => {
                  setGenerate((prev) => !prev)
                }}
              >Generate New Password</button>
            </div>
            <div className='flex text-sm flex-wrap flex-row justify-center gap-x-5'>
              <div className='flex items-center gap-x-1'>
                <input
                  type="range"
                  min={8}
                  max={30}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => { setLength(e.target.value) }}
                />
                <label >Length : {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={CharAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev)
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App