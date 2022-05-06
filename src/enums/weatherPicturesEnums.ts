import clearSun from "../pictures/day/clearsun.png"
import cloudySun from "../pictures/day/cloudysun.png"
import cloudy from "../pictures/day/cloudy.png"
import flash from "../pictures/day/flash.png"
import rainy from "../pictures/day/rainy.png"
import clearMoon from "../pictures/night/clearmoon.png"
import cloudyMoon from "../pictures/night/cloudymoon.png"

export const weatherPicDay = {
    clear: clearSun,
    cloudySun:cloudySun,
    cloudy: cloudy,
    flash: flash,
    rainy: rainy

}

export const weatherPicNight = {
    clear: clearMoon,
    cloudyMoon:cloudyMoon,
    cloudy: cloudy,
    flash: flash,
    rainy: rainy
}

export enum columnVariant{
    selected = "selected",
    outlined = "outlined",
    basic = "basic"
}
