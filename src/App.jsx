import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [count,setCount] =  useState(5)



  // let count=5;

  const incre=()=>{
    setCount(count+1)
  }
  const decre=()=>{
    if(count<1){
      count=1;

    }
    
    setCount(count-1)
    
  }

  return (
    <>
      <h1>hellow {count}</h1>

      <button onClick={incre}>ADD {count}</button>
      <br />
      <br />
      <button onClick={decre}>minus {count}</button>
    </>
  )
}

export default App
