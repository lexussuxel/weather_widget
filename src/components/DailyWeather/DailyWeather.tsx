import React, { FC } from 'react'
import { WeatherI } from './WeatherI'
import styles from './DailyWeatherStyles.module.css'
import { columnVariant } from './enums'
import { DAYS_OF_WEEK } from '../WeatherBoard/weatherArr'
//import {somePics} from "./picturesConstants";

export const DailyWeather: FC<WeatherI> = ({
    date,
    weatherPicDay,
    weatherPicNight,
    weatherTempNight,
    weatherTempDay,
    windSpeed,
    variant,
    id,
}) => {
    console.log(id + ' ' + variant)
    const binDate = (date: number) => {
        return date < 10 ? '0' + date : date
    }

    //let image = require(somePics.flash)
    const renderSwitch = (id: number) => {
        switch (id) {
            case 0:
                return <p>{'Yesterday'}</p>
            case 1:
                return <p>{'Today'}</p>
            case 2:
                return <p>{'Tomorrow'}</p>
            default:
                return <p>{DAYS_OF_WEEK[date.getDay()]}</p>
        }
    }
    return (
        <div
            className={
                styles.wrapper +
                (variant == columnVariant.selected
                    ? ' ' + styles.selected
                    : '') +
                (variant == columnVariant.outlined ? ' ' + styles.outlined : '')
            }
        >
            {renderSwitch(id)}
            <p style={{ fontSize: '12px' }}>
                {binDate(date.getDate()) + '.' + binDate(date.getMonth() + 1)}
            </p>
            <img src={weatherPicDay} alt="" />
            <div></div>
            <div>
                <img src={weatherPicNight} alt="" />
            </div>
            <p style={{ fontSize: '10px' }}>{windSpeed + 'm/s'}</p>
        </div>
    )
}
