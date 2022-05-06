import React, {FC} from 'react';
import {WeatherI} from "../interfaces/WeatherI";
import styles from "./DailyWeatherStyles.module.css"
import {columnVariant} from "../enums/weatherPicturesEnums";
import {DAYS_OF_WEEK} from "../consants/weatherArr";


const DailyWeather:FC<WeatherI> = (
    {
        date,
        weatherPicDay,
        weatherPicNight,
        weatherTempNight,
        weatherTempDay,
        windSpeed,
        variant,
        id,
    },
    ) => {
    console.log(id + " " + variant)
    const renderSwitch = (id:number) =>{
        switch(id){
            case 0:
                return <p>{"Yesterday"}</p>
            case 1:
                return <p>{"Today"}</p>
            case 2:
                return <p>{"Tomorrow"}</p>
            default:
                return <p>{DAYS_OF_WEEK[date.getDay()]}</p>
    }}
    return (
        <div className={styles.wrapper +
            (variant==columnVariant.selected?" " +styles.selected:"")+
            (variant==columnVariant.outlined?" "+styles.outlined:"")
        }>
            {renderSwitch(id)}
            <p style={{fontSize:"12px"}} >{date.getDate()+"."+(date.getMonth()+1)}</p>
            <img src={weatherPicDay} alt=""/>
            <div>

            </div>
            <div>
            <img src={weatherPicNight} alt=""/>
            </div>
            <p style={{fontSize:"10px"}} >{windSpeed + "m/s"}</p>

        </div>

    );
};

export default DailyWeather;

// <svg width="80" height="400">
//     <rect  width="80" height="800" style={{fill:"red", opacity:"0.5"}} ></rect>
//     <text  style={{color:"white", fontSize:"15px"}}>lyaaasdasdsdasd</text>
//     <image className={styles.marginClass} href={weatherPicDay} />
//     <text y="300" style={{color:"white", fill:"white"}}  fontSize="20px">{weatherTempNight}</text>
//     <image y="150px" className={styles.marginClass} href={weatherPicNight} />
// </svg>
