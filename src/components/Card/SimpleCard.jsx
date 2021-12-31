import React from 'react';

import {Container, makeStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';

import Panel from "../Panel/Panel";

const useStyles = makeStyles({
    root: {
        maxWidth: '800px'
    },
    card: {
        background: '#222831',
        width: '100%',
        height: '100%',
        minHeight: '380px',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

function SimpleCard() {
    const classes = useStyles();

    return (
        <Container disableGutters={true} className={classes.root}>
            <Card className={classes.card}>
                <Panel/>
            </Card>
        </Container>
    );
}

export default SimpleCard;