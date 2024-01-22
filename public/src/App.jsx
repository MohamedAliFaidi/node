import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <button
      onClick={()=>{
        fetch("/api/v1").then((response)=>{
          return response.json()
        }).then((data)=>{
          console.log(data)
        })
      }}
      
      >click</button>
    </div>
    </>
  )
}

export default App
