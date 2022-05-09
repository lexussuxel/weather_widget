import React from 'react'
import WeatherBoard from '../WeatherBoard/WeatherBoard'

function WeatherWidget() {
    return (
        <div>
            <h1 style={{ color: 'white' }}>Weather forecast</h1>
            <WeatherBoard />
        </div>
    )
}

export default WeatherWidget
