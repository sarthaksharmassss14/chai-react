import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    username: "sarthak",
    age: 20
  }
 
  return (
    <>
     <h1 className='bg-green-700 text-black p-4 rounded-3xl mb-4'> Tailwind test</h1>
    < Card username= "Chai aur Code" />
    < Card username= "sarthak"/>
    </>
  )
}

export default App
