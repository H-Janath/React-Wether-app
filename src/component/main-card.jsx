import React from 'react';

function WeatherForecast() {
  return (
   
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
            <div className="input-group rounded mb-3">
              <input type="search" className="form-control rounded" placeholder="City" aria-label="Search" aria-describedby="search-addon" />
              <a href="#!" type="button">
                <span className="input-group-text border-0 fw-bold" id="search-addon">
                  Check!
                </span>
              </a>
            </div>
            <div className="mb-4 pb-2">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                <label className="form-check-label" htmlFor="inlineRadio1">Celsius</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label" htmlFor="inlineRadio2">Fahrenheit</label>
              </div>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="mb-1 sfw-normal">New York, US</h4>
                <p className="mb-2">Current temperature: <strong>5.42°C</strong></p>
                <p>Feels like: <strong>4.37°C</strong></p>
                <p>Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong></p>
                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">Scattered Clouds</p>
                  <i className="fas fa-cloud fa-3x" style={{ color: '#eee' }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  );
}

export default WeatherForecast;
