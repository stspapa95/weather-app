import React, {Fragment} from 'react';
import {makeStyles, Typography, useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        color: '#ffffff',
        paddingTop: '0.3rem',
        fontSize: '1rem',
        fontFamily: 'Montserrat, san-serif',
        fontWeight: 400,
        textAlign: 'right'
    },
    smallText: {
        color: '#ffffff',
        paddingTop: '0.3rem',
        fontSize: '0.95rem',
        fontFamily: 'Montserrat, san-serif',
        fontWeight: 400,
        textAlign: 'right'
    }
});

function CurrentDayForecast({data}) {
    const matches = useMediaQuery('(max-width: 700px)');
    const classes = useStyles()

    let {consolidated_weather} = data;
    let forecastAcc = consolidated_weather[0].predictability;
    let humidity = consolidated_weather[0].humidity;
    let windSpeed = Math.round(consolidated_weather[0].wind_speed);
    let airPressure = Math.round(consolidated_weather[0].air_pressure);
    let maxTemp = Math.round(consolidated_weather[0].max_temp);
    let minTemp = Math.round(consolidated_weather[0].min_temp);

    return (
        <Fragment>
            <Typography className={!matches ? classes.root : classes.smallText}>{`${forecastAcc} %`}</Typography>
            <Typography className={!matches ? classes.root : classes.smallText}>{`${humidity} %`}</Typography>
            <Typography className={!matches ? classes.root : classes.smallText}>{`${windSpeed} km/h`}</Typography>
            <Typography className={!matches ? classes.root : classes.smallText}>{`${airPressure} mb`}</Typography>
            <Typography className={!matches ? classes.root : classes.smallText}>{`${maxTemp} °C`}</Typography>
            <Typography className={!matches ? classes.root : classes.smallText}>{`${minTemp} °C`}</Typography>
        </Fragment>
    )
}

export default CurrentDayForecast;