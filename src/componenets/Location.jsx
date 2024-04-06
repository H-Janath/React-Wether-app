import { useEffect, useState } from "react";
import MainCard from "./mainCard";
function LocationFetcher() {
    const [city,setCity] = useState('');
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    if (position && position.coords) {
                        setLocation({
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        });
                    } else {
                        setError('Unable to get location coordinates.');
                    }
                },
                (error) => {
                    setError(error.message);
                    console.error('Error getting location:', error);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
            console.error('Geolocation is not supported by this browser.');
        }
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div>
            {error ? (
                <p>Error: {error}</p>
            ) : location ? (
                <p>
                    Your location is: {location.latitude}, {location.longitude}
                </p>
            ) : (
                <p>Loading location...</p>
            )}

            {
                location!=null?
                <MainCard lat={location.latitude} log={location.longitude} />
                :<h3>Wait to identify your location</h3>
            }
        </div>
    );
};

export default LocationFetcher;
//AIzaSyDrW-BwbZQGKjJe5TtOmU69KU1KUEeCkbc