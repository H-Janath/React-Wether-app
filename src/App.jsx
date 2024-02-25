import { useState } from 'react'
import './App.css'
import Card from './component/card'
import WeatherForecast from './component/main-card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="continer">
      <div className="row">
      <WeatherForecast/>
      </div>
      <div className="row">
          <div className="col-4"><Card/> </div>
          <div className="col-4"><Card/> </div>
          <div className="col-4"><Card/> </div>
     
      </div>
    </div>
       
    </>
  )
}

export default App
