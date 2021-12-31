import React, {Fragment} from 'react';

import {Grid, Typography, makeStyles, useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles({
    typography: {
        textAlign: 'center',
        paddingTop: '0.5rem',
        fontSize: '1.05rem',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        color: '#ffffff'
    },
    typographySmall: {
        textAlign: 'center',
        paddingTop: '0.5rem',
        fontSize: '0.95rem',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        color: '#ffffff'
    }
});


function UpcomingForecastsItem({forecasts}) {
    const matches = useMediaQuery('(max-width:700px)');
    const classes = useStyles();

    return (
        <Fragment>
            {forecasts.map((item) => {
                return <Grid item>
                    <img src={item.src} alt="" width={40} height={40}/>
                    <Typography
                        className={!matches ? classes.typography : classes.typographySmall}>{item.day}</Typography>
                    <Typography
                        className={!matches ? classes.typography : classes.typographySmall}>{`${item.temp}°`}</Typography>
                </Grid>
            })}
        </Fragment>
    )
}

export default UpcomingForecastsItem;