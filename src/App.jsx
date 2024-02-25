import { useState } from 'react'
import './App.css'
import Search from './component/search/search'



function App() {
  const [count, setCount] = useState(0)

  const handleOnSearchChange = (SearchData) => {
    console.log(SearchData)
  }
  return (
    <>
    <Search onSearchChange={handleOnSearchChange}/>
       
    </>
  )
}

export default App
