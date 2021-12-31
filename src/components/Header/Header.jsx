import React, {Fragment} from 'react';

import {Typography} from "@material-ui/core";
import {useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        color: '#FFFFFF',
        paddingTop: '2.5rem',
        marginBottom: '2.5rem',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '2rem'
    },
    headerSmall: {
        fontSize: '1.5rem'
    }
});

function Header() {
    const matches = useMediaQuery('(max-width:640px)');
    const classes = useStyles();

    return (
        <Fragment>
            {!matches ?
                <Typography variant={"h4"} align={"center"} className={classes.root}>Weather <span
                    style={{fontWeight: 700}}>Forecast</span>
                </Typography> :
                <Typography variant={"h4"} align={"center"}
                            className={`${classes.root} ${classes.headerSmall}`}>Weather <span
                    style={{fontWeight: 700}}>Forecast</span>
                </Typography>
            }
        </Fragment>
    );
}

export default Header;