

function Card() {
    return (
      <>
      <section className="vh-100" style={{ backgroundColor: '#4B515D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card" style={{ color: '#4B515D', borderRadius: '35px' }}>
                <div className="card-body p-4">
                  <div className="d-flex">
                    <h6 className="flex-grow-1">Warsaw</h6>
                    <h6>15:07</h6>
                  </div>
                  <div className="d-flex flex-column text-center mt-5 mb-4">
                    <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }}> 13°C </h6>
                    <span className="small" style={{ color: '#868B94' }}>Stormy</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                      <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> 40 km/h </span></div>
                      <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> 84% </span></div>
                      <div><i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"> 0.2h </span></div>
                    </div>
                    <div>
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px" alt="Weather icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
  
             
      )
  }
  
  export default Card;    