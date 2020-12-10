import React from 'react'
import {
    Grid, Typography, Link, makeStyles, CssBaseline, Avatar, Paper,
    TextField,
    FormControlLabel, Checkbox,
    Button, Box, AppBar, Toolbar, CardMedia,

} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import bgCOBAEJ from '../assets/img/bgCobaej.jpg'


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'SIGT © '}
            <Link color="inherit" href="https://cobaej.edu.mx/">
                COBAEJ
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: "url(https://lh5.googleusercontent.com/DlWDmxQyqVTzf11e1xZmlA1W47iB4xK18bUn_wRBuSRqEg4OTKn-39JdDB4X2gBgv0rma-6nfpthJnpjdVPe=w1366-h625-rw)",
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function Login() {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root} spacing={3}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={12}>
                <AppBar position="static" color="secondary" >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} align="center">
                            Sistema Gestor de Trámites Internos del COBAEJ 7
                </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Iniciar sesión
            </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo electrónico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Recordar usuario"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Ingresar
              </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    ¿Olvidaste tu contraseña?
                  </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"¿No tienes una cuenta aún?"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login
