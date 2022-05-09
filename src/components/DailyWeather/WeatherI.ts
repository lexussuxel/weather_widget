import { columnVariant } from './enums'

export interface WeatherI {
    date: Date
    weatherTempDay: number
    weatherTempNight: number
    windSpeed: number | string
    weatherPicDay: string
    weatherPicNight: string
    variant: columnVariant
    id: number
    // onClick: (a: number, b: string)=>void;
}
