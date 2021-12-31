import React, {Fragment} from 'react';

import {Box, Typography, makeStyles, useMediaQuery} from "@material-ui/core";
import moment from "moment";

import pin from '../../assets/location-pin.png';

import './currentDayBanner.css';

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
    firstBox: {
        position: 'absolute',
        bottom: '255px',
        left: '25px'
    },
    secondBox: {
        position: 'absolute',
        bottom: '20px',
        left: '25px'
    },
    h4: {
        fontFamily: 'Montserrat, san-serif',
        color: '#ffffff',
        fontSize: '1.8rem',
        fontWeight: 700,
    },
    h4Small: {
        fontFamily: 'Montserrat, san-serif',
        color: '#ffffff',
        fontSize: '1.6rem',
        fontWeight: 700,
    },
    h5: {
        fontFamily: 'Montserrat, san-serif',
        color: '#ffffff',
        fontSize: '1.2rem',
        paddingTop: '0.7rem',
        fontWeight: 700
    },
    h5Small: {
        fontFamily: 'Montserrat, san-serif',
        color: '#ffffff',
        fontSize: '1.05rem',
        paddingTop: '0.7rem',
        fontWeight: 700
    },
    h6: {
        fontFamily: 'Montserrat, san-serif',
        color: '#ffffff',
        paddingTop: '0.3rem',
        fontSize: '1rem',
        fontWeight: 500
    },
    h6Small: {
        fontFamily: 'Montserrat, san-serif',
        color: '#ffffff',
        fontSize: '0.7rem',
        paddingTop: '0.8rem',
        fontWeight: 700
    },
});

function CurrentDayBanner({data}) {
    const matches = useMediaQuery('(max-width: 700px)');
    const classes = useStyles();

    let {title, time, consolidated_weather} = data;
    let currentDay = new Date(time).toLocaleString('en-us', {weekday: 'long'});
    let currentDate = moment().format('MMMM Do');
    let currentTemp = Math.round(consolidated_weather[0].the_temp);
    let currentWeather = consolidated_weather[0].weather_state_name;

    return (
        <Fragment>
            <div style={{width: '100%', height: '380px'}} className="img-container"/>
            <Box className={classes.root}>
                <Box className={classes.firstBox}>
                    <Typography variant={"h4"}
                                className={!matches ? classes.h4 : classes.h4Small}>{currentDay}</Typography>
                    <Typography variant={"h5"}
                                className={!matches ? classes.h5 : classes.h5Small}>{currentDate}</Typography>
                    <Typography className={classes.h6}>
                        <img src={pin} alt="" width={"14px"} height={"18px"} style={{verticalAlign: 'middle'}}/>
                        <span style={{paddingLeft: '6px'}}>{title}</span>
                    </Typography>
                </Box>
                <Box className={classes.secondBox}>
                    <Typography variant={"h4"} className={!matches ? classes.h4 : classes.h4Small}>
                        {`${currentTemp}°C`}
                    </Typography>
                    <Typography variant={"h5"} className={!matches ? classes.h5: classes.h5Small} style={{fontWeight: 400}}>
                        {currentWeather}
                    </Typography>
                </Box>
            </Box>
        </Fragment>
    );
}

export default CurrentDayBanner;