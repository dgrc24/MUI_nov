import 'date-fns'
import React from 'react'
import { TextField, makeStyles, Grid, Typography, Divider, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import Axios from 'axios'
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "100%",

        }
    }
}));

function FormPsic() {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-11-09T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    const classes = styles()
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h4" color="initial" align="center"> Datos personales y académicos</Typography>
                    <Divider />
                </Grid>
                <Grid item xs={6} >
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Número de control"
                        defaultValue="14PB02020B"
                        variant="filled"
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        disabled
                        id="Semestre"
                        label="Semestre en curso"
                        defaultValue="5"
                        variant="filled"
                        content />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        disabled
                        id="Especialidad"
                        label="Especialidad: "
                        defaultValue="Informática"
                        variant="filled"
                        content />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        disabled
                        id="Nombre"
                        label="Nombre del Alumno: "
                        defaultValue="Carlos Garcia"
                        variant="filled"
                        content />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        disabled
                        id="Grupo"
                        label="Grupo"
                        defaultValue="E"
                        variant="filled"
                        content />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        disabled
                        id="Turno"
                        label="Turno: "
                        defaultValue="Vespertino"
                        variant="filled"
                        content />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="h4" color="initial" align="center">Datos de la reservación</Typography>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>

                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Selecciona fecha para tu cita"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="¿En qué horario?"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>

                </MuiPickersUtilsProvider>
                <Grid item xs={12}>
                    <Button variant="contained" >
                        Confirmar
                    </Button>
                    <Button variant="contained" >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>

        </form>


    )
}

export default FormPsic
