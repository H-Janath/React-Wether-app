import React, { useState } from 'react';

function WeatherForecast() {


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
