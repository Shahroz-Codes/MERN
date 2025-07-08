import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Shahroz-Codes </h1>
      <h1>Why hooks are used? </h1>
      <h1>React handles UI updation</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          add count {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          dec count {count}
        </button>
      </div>
      <p className="read-the-docs">
        count is {count}
      </p>
    </>
  )
}

export default App
