import React from 'react'
import './WeatherIconStyle.css'

const WeatherIcon = ({ weatherCode }) => {
  const getWeatherIconClass = () => {
    if (weatherCode >= 200 && weatherCode < 300) {
      return 'thunderstorm'
    } else if (weatherCode >= 300 && weatherCode < 400) {
      return 'drizzle'
    } else if (weatherCode >= 500 && weatherCode < 600) {
      return 'rain'
    } else if (weatherCode >= 600 && weatherCode < 700) {
      return 'snow'
    } else if (weatherCode >= 700 && weatherCode < 800) {
      return 'atmosphere'
    } else if (weatherCode === 800) {
      return 'clear'
    } else if (weatherCode === 801) {
      return 'fewclouds'
    } else if (weatherCode === 802) {
      return 'scatteredclouds'
    } else if (weatherCode === 803) {
      return 'brokenclouds'
    } else if (weatherCode === 804) {
      return 'overcastclouds'
    } else {
      return 'default'
    }
  };

  return <div className={`weather-icon ${getWeatherIconClass()}`} />
};

export default WeatherIcon