import React from 'react';

function Weather(props)
{
    return (
        <div>
            <p>Location:{props.weatherInfo.country},{props.weatherInfo.city}  </p>
            <p>Temperature: {props.weatherInfo.temp}<sup>o</sup></p>
            <p>Pressure: {props.weatherInfo.pressure}</p>
            <p>Sunset: {new Date(props.weatherInfo.sunset).toTimeString()}</p>

        </div>
    );
}

export default Weather;