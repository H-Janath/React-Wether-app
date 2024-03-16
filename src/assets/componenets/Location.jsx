import { useEffect, useState } from "react";


function LocationFetcher(){
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position:', position); // Log the position object
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
    </div>
  );
};

export default LocationFetcher;
