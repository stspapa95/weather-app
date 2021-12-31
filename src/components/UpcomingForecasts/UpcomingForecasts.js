// noinspection JSUnresolvedVariable

import React from 'react';

import clear from '../../assets/images/c.svg';
import hail from '../../assets/images/h.svg';
import heavyCloud from '../../assets/images/hc.svg';
import heavyRain from '../../assets/images/hr.svg';
import lightCloud from '../../assets/images/lc.svg';
import lightRain from '../../assets/images/lr.svg';
import showers from '../../assets/images/s.svg';
import sleet from '../../assets/images/sl.svg';
import snow from '../../assets/images/sn.svg';
import thunderstorm from '../../assets/images/t.svg';

import UpcomingForecastsItem from "./UpcomingForecastsItem";


function UpcomingForecasts({data}) {

    let {consolidated_weather} = data;
    let initForecast = consolidated_weather.slice(1);

    let finalForecast = initForecast.map((el) => {
        switch (el.weather_state_abbr) {
            case 'c':
                return {
                    temp: Math.round(el.the_temp),
                    src: clear,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3),
                }
            case 'h':
                return {
                    temp: Math.round(el.the_temp),
                    src: hail,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 'hc':
                return {
                    temp: Math.round(el.the_temp),
                    src: heavyCloud,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 'hr':
                return {
                    temp: Math.round(el.the_temp),
                    src: heavyRain,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 'lc':
                return {
                    temp: Math.round(el.the_temp),
                    src: lightCloud,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 'lr':
                return {
                    temp: Math.round(el.the_temp),
                    src: lightRain,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 's':
                return {
                    temp: Math.round(el.the_temp),
                    src: showers,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 'sl':
                return {
                    temp: Math.round(el.the_temp),
                    src: sleet,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 'sn':
                return {
                    temp: Math.round(el.the_temp),
                    src: snow,
                    day: new Date(el.applicable_date).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            case 't':
                return {
                    temp: Math.round(el.the_temp),
                    src: thunderstorm,
                    day: new Date(el.created).toLocaleString('en-us', {weekday: 'long'}).slice(0, 3)
                }
            default:
                return ''
        }
    });

    return (
        <UpcomingForecastsItem forecasts={finalForecast} />
    )
}

export default UpcomingForecasts;