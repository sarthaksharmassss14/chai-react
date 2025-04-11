import { useState } from 'react'
import './App.css'

function App() {
  
  const[counter, setCounter]=useState(15)



  const addvalue= ()=>{
    
    //counter= counter+1
    setCounter(counter+1)
  
  }
  const removevalue=()=>{
   
    setCounter(counter-1)
  }

  return (
    <>
    <h1> Chai aur react</h1>
    <h2> Counter value: {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br/>
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
