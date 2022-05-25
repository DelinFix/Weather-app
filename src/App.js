
import React, {useState} from "react"

function App() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')
    const [title, setTitle] = useState('Enter the name of the city and press Enter')

    const search = event => {
        if(event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=9ff978828c0dcd4087017012b6eb3e5c`)
                .then(res => res.json())
                .then(result => {
                    if(result.message === "city not found") {
                        setTitle('Error, city not found, try again')
                        setWeather(result)
                    } else {
                        setWeather(result)
                        setQuery('')
                    }
                })
        }
    }

  return (
      <div className={(typeof weather.main != "undefined")
          ? ((weather.main.temp > 17)
              ? 'background warm'
              : 'background')
          : 'background'}>
          <div className={
              (typeof weather.main != "undefined")
                  ? ((weather.main.temp > 17)
                  ? 'app warm'
                  : 'app')
                  : 'app'}>
              <main>
                  <div className="search-box">
                      <input
                          type="text"
                          className="search-box__bar"
                          placeholder="Search..."
                          onChange={e => setQuery(e.target.value)}
                          value={query}
                          onKeyPress={search}
                      />
                  </div>
                  {(typeof  weather.main != "undefined") ?
                      (
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
                          </div>)
                      : (<h1 className="title">{title}</h1>)
                  }
              </main>
          </div>
      </div>
  )
}

export default App
