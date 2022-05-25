import React, {useState} from 'react'
import axios from "axios"

const SearchCity = ( {setWeather, setWarm, setTitle} ) => {
    const [query, setQuery] = useState('')

    const search = async (event) => {
        if(event.key === "Enter") {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=9ff978828c0dcd4087017012b6eb3e5c`)
                setWeather(response.data)
                setQuery('')
                if (response.data.main.temp > 17){
                    setWarm(true)
                } else {
                    setWarm(false)
                }
            } catch (e) {
                setWeather(e.response.data)
                setTitle('Error, city not found, try again')
            }
        }
    }

    return (
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
    )
}

export default SearchCity
