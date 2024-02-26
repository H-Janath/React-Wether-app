import { useState } from "react";


function MainCard() {

    const [city, setCity] = useState("");
    const [wetherData, setwetherData] = useState(null);

    const handleFetchWether = () =>{
        fetchWetherdata(city);
    }

    const fetchWetherdata = async (cityName) => {
       try{
        //make fetch request to your wether API

        const response  =  await fetch(`http://api.weatherapi.com/v1/current.json?key=9f41194522374b5389190824233012&q=${cityName}`);
        if(!response.ok){
            throw new Error('Failed to fetch wether data');
        }
        const data = await response.json();
        setwetherData(data);
       }catch{
        console.log('Error fetchong wether data',error.message);
       }
    };

    return (
        <>
            <div className="">
                <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
                <div className="input-group rounded mb-3">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="City"
                        aria-label="Search"
                        aria-describedby="search-addon"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <a href="#!" type="button" onClick={handleFetchWether}>
                        <span
                            className="input-group-text border-0 fw-bold"
                            id="search-addon"
                        >
                            Check!
                        </span>
                    </a>
                </div>
                <div className="card bg-body-secondary " style={{ color: "#4B515D", borderRadius: 35 }}>
                    <div className="card-body p-4">
                        <div className="d-flex">
                            <h6 className="flex-grow-1">Warsaw</h6>
                            <h6>15:07</h6>
                        </div>
                        <div className="d-flex flex-column text-center mt-5 mb-4">
                            <h6
                                className="display-4 mb-0 font-weight-bold"
                                style={{ color: "#1C2331" }}
                            >
                                {" "}
                                13°C{" "}
                            </h6>
                            <span className="small" style={{ color: "#868B94" }}>
                                Stormy
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                                <div>
                                    <i className="fas fa-wind fa-fw" style={{ color: "#868B94" }} />{" "}
                                    <span className="ms-1"> 40 km/h</span>
                                </div>
                                <div>
                                    <i className="fas fa-tint fa-fw" style={{ color: "#868B94" }} />{" "}
                                    <span className="ms-1"> 84% </span>
                                </div>
                                <div>
                                    <i className="fas fa-sun fa-fw" style={{ color: "#868B94" }} />{" "}
                                    <span className="ms-1"> 0.2h </span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                                    width="100px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainCard;