import React, { useState } from 'react'
import CityDropDown from './components/CityDropDown'
import Weather from './components/Weather'
import './App.css'

const App = () => {
  const [selectedCity, setSelectedCity] = useState('Toronto')
  const apiKey = 'd229e70667868c3a4996fca3265f8fbf'

  const handleCityChange = city => {
    setSelectedCity(city);
  }

  return (
    <div className="container">
      <CityDropDown selectedCity={selectedCity} handleCityChange={handleCityChange} />
      <Weather apiKey={apiKey} selectedCity={selectedCity} />
    </div>
  )
}

export default App