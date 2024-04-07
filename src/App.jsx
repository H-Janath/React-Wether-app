import './App.css'
import LocationFetcher from './componenets/Location'
import SearchBox from './componenets/Search'


function App() {
 
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
        <LocationFetcher/>
        </div>
        <div className="col-lg-6">
            <SearchBox/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
