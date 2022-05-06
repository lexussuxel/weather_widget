import {columnVariant} from "../enums/weatherPicturesEnums";

export interface WeatherI {
    date: Date;
    weatherTempDay: number | string;
    weatherTempNight: number | string;
    windSpeed: number | string;
    weatherPicDay: string;
    weatherPicNight: string;
    variant: columnVariant;
    id:number;
   // onClick: (a: number, b: string)=>void;
}
