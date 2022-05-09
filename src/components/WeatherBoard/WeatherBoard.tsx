import React, { useState } from 'react'
import DailyWeather from '../DailyWeather'
import { columnVariant } from '../DailyWeather/enums'
import { weather } from './weatherArr'
import styles from './WeatherBoard.module.css'

const WeatherBoard = () => {
    const [variant, setVariant] = useState(1)
    const changeVariant = (id: number, newVariant: columnVariant) => {
        console.log(id)
        if (weather[id].variant == columnVariant.selected) return
        try {
            weather.find((day) => day.variant == newVariant)!.variant =
                columnVariant.basic
        } catch (e) {}
        weather.find((day) => day.id == id)!.variant = newVariant
        setVariant(id)
    }
    return (
        <div className={styles.wrapper}>
            {weather.map((day, key) => (
                <div
                    onClick={() =>
                        changeVariant(day.id, columnVariant.selected)
                    }
                    onMouseEnter={() =>
                        changeVariant(day.id, columnVariant.outlined)
                    }
                >
                    <DailyWeather
                        date={day.date}
                        weatherPicDay={day.weatherPicDay}
                        weatherPicNight={day.weatherPicNight}
                        weatherTempDay={day.weatherTempDay}
                        weatherTempNight={day.weatherTempNight}
                        windSpeed={day.windSpeed}
                        variant={day.variant}
                        id={key}
                        key={key}
                    />
                </div>
            ))}
            <svg
                width="400"
                height="180"
                style={{ position: 'absolute', top: '150' }}
            >
                {weather.map((day, key) => (
                    <g>
                        {weather[key + 1] ? (
                            <g>
                                <line
                                    x1={43 + key * 80}
                                    y1={50 - day.weatherTempDay}
                                    x2={120 + key * 80}
                                    y2={50 - weather[key + 1].weatherTempDay}
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </g>
                        ) : null}
                        {weather[key + 1] ? (
                            <g>
                                <line
                                    x1={43 + key * 80}
                                    y1={120 - day.weatherTempNight}
                                    x2={120 + key * 80}
                                    y2={120 - weather[key + 1].weatherTempNight}
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </g>
                        ) : null}
                        <text
                            x={35 + key * 80}
                            y={40 - day.weatherTempDay}
                            fill="white"
                            fontSize="12"
                        >
                            {day.weatherTempDay + '°'}
                        </text>
                        <circle
                            cx={40 + key * 80}
                            cy={50 - day.weatherTempDay}
                            r="3"
                            stroke="white"
                            strokeWidth="2"
                        />
                        <text
                            x={35 + key * 80}
                            y={140 - day.weatherTempNight}
                            fill="white"
                            fontSize="12"
                        >
                            {day.weatherTempNight + '°'}
                        </text>
                        <circle
                            cx={40 + key * 80}
                            cy={120 - day.weatherTempNight}
                            r="3"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </g>
                ))}
            </svg>
        </div>
    )
}

export default WeatherBoard
