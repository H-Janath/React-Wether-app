import { useState } from 'react'
import './App.css'
import Card from './component/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Card/>
    </>
  )
}

export default App
