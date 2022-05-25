//todo строгая типизация

import React, {useState} from "react"
import WeatherInfo from "./components/WeatherInfo"
import SearchCity from "./components/SearchCity"

function App() {
    const [weather, setWeather] = useState([])
    const [title, setTitle] = useState('Enter the name of the city and press Enter')
    const [warm, setWarm] = useState(true)

    return (
        <div className={(weather.cod === 200) && warm ? 'background warm' : 'background'}>
            <div className={(weather.cod === 200) && warm ? 'app warm' : 'app'}>
                <main>
                    <SearchCity setWarm={setWarm} setWeather={setWeather} setTitle={setTitle}/>
                    {(weather.cod === 200) ?
                        (<WeatherInfo weather={weather}/>)
                        : (<h1 className="title">{title}</h1>)
                    }
                </main>
            </div>
        </div>
  )
}

export default App
