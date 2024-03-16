import './App.css'
import LocationFetcher from './assets/componenets/Location'
import MainCard from './assets/componenets/mainCard'




function App() {
 
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
        <MainCard/>
        </div>
        <div className="col-lg-6">
          <LocationFetcher/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
