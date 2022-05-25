import React from 'react'

const WeatherInfo = ( {weather} ) => {
    return (
        <div>
            <div>
                <div className="location-box">
                    <div className="location-box__name">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="location-box__date">
                        {String(new window.Date()).slice(3,15)}
                    </div>
                </div>
            </div>
            <div className="weather-box">
                <div className="weather-box__temp">
                    {Math.round(weather.main.temp)}° C
                </div>
                <div className="weather-box__weather">
                    {weather.weather[0].main}
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
