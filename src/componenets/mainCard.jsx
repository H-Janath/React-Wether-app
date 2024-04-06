import { useEffect, useState } from "react";

function MainCard(props) {

    const [city, setCity] = useState("");
    const [wetherData, setwetherData] = useState(null);

    const handleFetchWether = () => {
        fetchWetherdataUser(city);
    }
    useEffect(() => {
        fetchWetherdata();
    },[location]);

    const fetchWetherdata = async () => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4a2437807b3d44fa9de42158241603&q=${props.lat},${props.log}`);
            if (!response.ok) {
                throw new Error('Failed to fetch wether data');
            }
            const data = await response.json();

            setwetherData(data);

        } catch {
            console.error('Error fetchong wether data', error.message);
        }
    };
    const fetchWetherdataUser = async (city) => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4a2437807b3d44fa9de42158241603&q=${city}`);
            if (!response.ok) {
                throw new Error('Failed to fetch wether data');
            }
            const data = await response.json();

            setwetherData(data);

        } catch {
            console.error('Error fetchong wether data', error.message);
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
                {wetherData && <div className="card " style={{ color: "#4B515D", borderRadius: 35 }}>
                    <div className="card-body p-4">
                        <div className="d-flex">
                            <h6 className="flex-grow-1">{wetherData.location.region}</h6>
                            <h6>15:07</h6>
                        </div>
                        <div className="d-flex flex-column text-center mt-5 mb-4">
                            <h6
                                className="display-4 mb-0 font-weight-bold"
                                style={{ color: "#1C2331" }}
                            >
                                {" "}
                                {wetherData.current.temp_c}{" "}
                            </h6>
                            <span className="small" style={{ color: "#868B94" }}>
                                {wetherData.current.condition.text}
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                                <div>
                                    <i className="fas fa-wind fa-fw" style={{ color: "#868B94" }} />{" "}
                                    <span className="ms-1"> {wetherData.current.wind_kph} km/h</span>
                                </div>
                                <div>
                                    <i className="fas fa-tint fa-fw" style={{ color: "#868B94" }} />{" "}
                                    <span className="ms-1"> {wetherData.current.humidity} </span>
                                </div>
                                <div>
                                    <i className="fas fa-sun fa-fw" style={{ color: "#868B94" }} />{" "}
                                    <span className="ms-1"> 0.2h </span>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={wetherData.current.condition.icon}
                                    width="100px"
                                />
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default MainCard;