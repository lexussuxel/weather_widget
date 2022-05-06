import React, {useState} from 'react';
import DailyWeather from "./DailyWeather";
import {columnVariant} from "../enums/weatherPicturesEnums";
import {weather} from "../consants/weatherArr";


const WeatherBoard = () => {
    const [variant, setVariant] = useState(1);
    const changeVariant = (id:number, newVariant:columnVariant) =>{
            console.log(id);
            if (weather[id].variant==columnVariant.selected)
                return;
            try
            {
                weather.find((day)=>day.variant==newVariant)!.variant=columnVariant.basic;
            }
            catch (e){

             }
            weather.find((day)=>day.id==id)!.variant=newVariant;
            setVariant(id);
    }

    return (
        <div style={{display:"grid", gridTemplateColumns: "80px 80px 80px 80px 80px", height:"414px"}}>
            {weather.map((day,key)=>
                <div onClick={()=>changeVariant(day.id, columnVariant.selected)} onMouseEnter={()=>changeVariant(day.id,columnVariant.outlined)}>
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

            )}
            <svg viewBox={"0 0 400 800"}>
                <line x1="0" y1="80" x2="100" y2="20" stroke="white" />


            </svg>


        </div>
    );
};

export default WeatherBoard;