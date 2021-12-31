import React, {Fragment} from 'react';
import {makeStyles, Typography, useMediaQuery} from "@material-ui/core";
import {description} from "./description";

const useStyles = makeStyles({
    root: {
        color:'#ffffff',
        paddingTop: '0.3rem',
        fontSize:'1rem',
        fontFamily:'Montserrat, san-serif',
        fontWeight: 700,
        textTransform:'uppercase',
    },
    smallText: {
        color:'#ffffff',
        paddingTop: '0.3rem',
        fontSize:'0.95rem',
        fontFamily:'Montserrat, san-serif',
        fontWeight: 700,
        textTransform:'uppercase',
    }
});

function CurrentDayDescription() {
    const matches = useMediaQuery('(max-width: 700px)');
    const classes = useStyles();

    return (
        <Fragment>
            {description.map((item)=>(
                <Typography className={!matches ? classes.root : classes.smallText} key={item.id}>{item.title}</Typography>
            ))}
        </Fragment>
    )
}

export default CurrentDayDescription;