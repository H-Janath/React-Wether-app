import { IoSearch } from "react-icons/io5";
export default function SearchBox() {
    return (
      <>
    
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form action="#" method="GET" className="form-inline">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg" // form-control-lg class added for larger size
                    placeholder="Enter location..."
                    aria-label="Search for..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary btn-lg" type="submit"> {/* btn-lg class added for larger size */}
                    <IoSearch/>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  