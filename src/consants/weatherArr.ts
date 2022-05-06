import {WeatherI} from "../interfaces/WeatherI";
import {columnVariant, weatherPicDay, weatherPicNight} from "../enums/weatherPicturesEnums";

const DATE_TODAY = new Date;
export const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const weather: WeatherI[] = [
    {
        date: new Date(new Date().setDate(DATE_TODAY.getDate() - 1)),
        weatherTempDay:20,
        weatherTempNight: 11,
        weatherPicDay:weatherPicDay.clear,
        weatherPicNight:weatherPicNight.cloudyMoon,
        windSpeed:15.4,
        variant: columnVariant.outlined,
        id:0,

    },
    {
        date: DATE_TODAY,
        weatherTempDay:20,
        weatherTempNight: 11,
        weatherPicDay:weatherPicDay.cloudySun,
        weatherPicNight:weatherPicNight.cloudyMoon,
        windSpeed:15.4,
        variant: columnVariant.selected,
        id:1

    },
    {
        date: new Date(new Date().setDate(DATE_TODAY.getDate() + 1)),
        weatherTempDay:20,
        weatherTempNight: 11,
        weatherPicDay:weatherPicDay.cloudy,
        weatherPicNight:weatherPicNight.cloudyMoon,
        windSpeed:15.4,
        variant: columnVariant.basic,
        id:2

    },
    {
        date: new Date(new Date().setDate(DATE_TODAY.getDate() + 2)),
        weatherTempDay:20,
        weatherTempNight: 11,
        weatherPicDay:weatherPicDay.cloudySun,
        weatherPicNight:weatherPicNight.cloudyMoon,
        windSpeed:15.4,
        variant: columnVariant.basic,
        id:3

    },
    {
        date: new Date(new Date().setDate(DATE_TODAY.getDate() + 3)),
        weatherTempDay:20,
        weatherTempNight: 11,
        weatherPicDay:weatherPicDay.rainy,
        weatherPicNight:weatherPicNight.cloudyMoon,
        windSpeed:15.4,
        variant: columnVariant.basic,
        id:4

    }
]
