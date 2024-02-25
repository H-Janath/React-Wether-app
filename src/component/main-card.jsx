import React, { useState } from 'react';

function WeatherForecast() {
    const [city,setCity] = useState('');
    const [wetherData,setWetherData] = useState(null);
    
    const handleInputChange = (event) =>{
        setCity(event.target.value);
    };

    const handleFetchWeather = () => {
        fetchWeatherData(city);
    }
    const fetchWeatherData = async (cityName) => {
        try {
            // Make a fetch request to your weather API
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2aa4ba446ebf4d39bd685435233012&q=${cityName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    };
   

   

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
                    <div className="input-group rounded mb-3">
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="City"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            value={city}
                            onChange={handleInputChange}
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={handleFetchWeather}
                        >
                            Check!
                        </button>
                    </div>
                    {weatherData && (
                        <div className="card shadow-0 border">
                            <div className="card-body p-4">
                                <h4 className="mb-1 sfw-normal"></h4>
                                <p className="mb-2">Current temperature: <strong></strong></p>
                                <p>Weather Condition:</p>
                                <p>Wind:  km/h, </p>
                                <p>Humidity: %</p>
                                <p>Pressure:  mb</p>
                                {/* Set image based on weather condition */}
                                {weatherData.current.condition.icon && (
                                    <img src="" alt="Weather Icon" />
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WeatherForecast;
