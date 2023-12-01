import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherIcon from './WeatherIcon'

const Weather = ({ apiKey, selectedCity }) => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`)
        setWeatherData(response.data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchData()
  }, [selectedCity, apiKey])

  return (
    <div>
      {weatherData && (
        <>
          <h2>Today's Weather in {weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <WeatherIcon weatherCode={weatherData.weather[0].id} />
          <p>&nbsp;</p>
          <p>Daily High: {(weatherData.main.temp_max - 273.15).toFixed(1)} °C</p>
          <p>Daily Low: {(weatherData.main.temp_min - 273.15).toFixed(1)} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} km/h</p>
          <p>Air Pressure: {weatherData.main.pressure} mb</p>
        </>
      )}
    </div>
  )
}

export default Weather
