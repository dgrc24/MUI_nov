import React, { Component } from 'react'
import {
    Grid, Typography, Link, CssBaseline, Avatar, Paper,
    TextField,
    FormControlLabel, Checkbox,
    Button, Box, AppBar, Toolbar, withStyles
} from '@material-ui/core'
import Dialogo from '../components/Dialogo';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { isEmail } from "validator";

const styles = theme => ({
    root: {
        height: '100vh',

    },
    image: {
        backgroundImage: "url(https://cobaej.edu.mx/component/Arte/noticias/elemento_24_imagen_1.jpg)",
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
    navbar: {
        paddingBottom: 0
    }

});


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


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
class Logueo extends Component {
    constructor(props) {
        super(props);

        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container component="main" className={classes.root} >
                <CssBaseline />
                <Grid item xs={12} sm={12} md={12}>
                    <AppBar position="fixed" color="secondary" >
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
                        <form className={classes.form} onSubmit={this.handleLogin}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo electrónico"
                                name="email"
                                value={this.state.username}
                                validations={required}
                                onChange={this.onChangeUsername}
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
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
                                    <Dialogo variant="body2" buttonTitulo="¿Has olvidado tu contraseña?"
                                        titulo="Recuperar contraseña"
                                        body="Contacte al departamento de control escolar
                                    para que le sea proporcionada una nueva contraseña"></Dialogo>
                                </Grid>

                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid >



        )
    }
}

export default withStyles(styles)(Logueo);
