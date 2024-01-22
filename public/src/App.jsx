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
        fetch("https://node-sage-six.vercel.app/api").then((response)=>{
          return response.json()
        }).then((data)=>{
          console.log(data)
        })
      }}
      
      ></button>
    </div>
    </>
  )
}

export default App
