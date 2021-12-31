import React, {useEffect, useState} from 'react';

import {
    Button,
    Box,
    TextField,
    createTheme,
    MuiThemeProvider,
    makeStyles,
    Grid,
    CircularProgress,
    Dialog,
    DialogContent,
    DialogContentText, DialogActions, DialogTitle
} from "@material-ui/core";

import axios from "axios";

import CurrentDayBanner from "../CurrentDay/CurrentDayBanner";
import CurrentDayDescription from "../CurrentDay/CurrentDayDescription";
import CurrentDayForecast from "../CurrentDay/CurrentDayForecast";
import UpcomingForecasts from "../UpcomingForecasts/UpcomingForecasts";

const useStyles = makeStyles({
    button: {
        width: '100%',
        color: '#ffffff',
        background: 'linear-gradient(135deg, #72edf2 10%, #5151e5 100%)',
        fontFamily: 'Poppins, san-serif',
    },
    textField: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#5ac6ff'
        },
        ' & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#5ac6ff'
        },
    },
    grid: {
        margin: '2rem 0 0 0',
        backgroundColor: '#222831',
        borderRadius: '15px',
        padding: '0.3rem 0 0.3rem 0',
        boxShadow: '0 0 50px -5px rgba(0, 0, 0, 0.25)',
    },
    typography: {
        textAlign: 'center',
        paddingTop: '0.5rem',
        fontSize: '1.05rem',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        color: '#ffffff'
    },
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#5ac6ff'
        },
        secondary: {
            main: '#e33371'
        },
    }
});

function Panel() {
    const classes = useStyles();

    const [place, setPlace] = useState('');
    const [id, setId] = useState(null);
    const [data, setData] = useState('');
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setPlace(e.target.value)
    };

    const handleClose = () => {
        setOpen(false);
        setPlace('');
    };

    const getId = () => {
        if (place) {
            axios.get(`https://www.metaweather.com/api/location/search/?query=${place}`, {
                headers: {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}
            }).then(res => {
                if (res) {
                    // noinspection JSUnresolvedVariable
                    let uniqueId = res.data[0].woeid;
                    setId(uniqueId);
                }
            }).catch(error => {
                if (error) {
                    setOpen(true);
                }
            });
        }
    };

    useEffect(() => {
        if (id !== null) {
            setIsLoading(true);
            axios.get(`https://www.metaweather.com/api/location/${id}`, {
                headers: {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}
            }).then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                setIsLoading(false);
            })
        }
    }, [id]);

    return (
        <MuiThemeProvider theme={theme}>
            {!data && !isLoading ? (
                    <form>
                        <TextField
                            label={"Search for location"}
                            variant={"outlined"}
                            className={classes.textField}
                            color={"primary"} autoComplete={"off"} autoFocus={true}
                            InputProps={{
                                style: {
                                    color: '#ffffff',
                                    fontFamily: 'Poppins, san-serif',
                                    fontSize: '14px'
                                }
                            }}
                            InputLabelProps={{
                                style: {
                                    fontFamily: 'Poppins, san-serif',
                                    fontSize: '14px',
                                    color: '#5ac6ff'
                                }
                            }}
                            onChange={handleChange}
                            value={place}
                        />
                        <Box mt={3}/>
                        <Button className={classes.button} onClick={getId}>search</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle id="form-dialog-title">Warning</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Entry was either not found in our database or is invalid. Please, try again.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose} color={"primary"}>
                                    OK
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </form>
                ) :
                isLoading ? (
                        <CircularProgress/>
                    ) :
                    data && !isLoading && (
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <CurrentDayBanner data={data}/>
                            </Grid>
                            <Grid item container style={{height:'100%'}} justifyContent={"space-around"} lg={8} md={8} sm={8} xs={12}>
                                <Grid container spacing={1} style={{paddingTop: '0.5rem', margin:0}} justifyContent={"space-around"}>
                                    <Grid item>
                                        <CurrentDayDescription/>
                                    </Grid>
                                    <Grid item/>
                                    <Grid item/>
                                    <Grid item/>
                                    <Grid item/>
                                    <Grid item/>
                                    <Grid item/>
                                    <Grid item>
                                        <CurrentDayForecast data={data}/>
                                    </Grid>
                                </Grid>
                                <Grid container className={classes.grid} spacing={1} justifyContent={"space-around"} alignItems={"center"} lg={11} md={11} sm={11} xs={11}>
                                    <UpcomingForecasts data={data}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
            }
        </MuiThemeProvider>
    );
}

export default Panel;