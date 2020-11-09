import React from 'react'
import {
    makeStyles, Typography, Hidden, colors, Divider, Button,
} from '@material-ui/core'
import { FullscreenExit } from '@material-ui/icons'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Card from '../components/Cards/Card'
import CardHeader from '../components/Cards/CardHeader'
import CardBody from '../components/Cards/CardBody'
import CardFooter from '../components/Cards/CardFooter'
import CardAvatar from '../components/Cards/CardAvatar'
import banner from '../assets/img/banner-beni.webp'



const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    cardbg: {
        color: '#2BD9B6'
    }


}))

const Main = () => {
    const classes = styles()
    const [abrir, setAbrir] = React.useState(false)
    const accAbrir = () => {
        setAbrir(!abrir)
    }
    return (
        <div className={classes.root}>
            <NavBar accAbrir={accAbrir} />
            <Hidden xsDown>
                <SideBar
                    variant="permanent"
                    open={true} />
            </Hidden>
            <Hidden smUp>
                <SideBar
                    variant="temporary"
                    open={abrir}
                    onClose={accAbrir} />
            </Hidden>


            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Card>
                    <CardHeader  >
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img src={banner} alt="..." width="100%" height="160px" />
                        </a>
                        <h3>
                            BECAS BENITO JUAREZ
                        </h3>
                        <Divider />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" align="center">
                            Activa tu ficha SUBES para poder solicitar una beca proporcionada por el gobierno
                            federal.
                            <br></br>
                        </Typography>
                        <br>
                        </br>
                        <Typography align="justify" >
                            Población a la que está dirigida:
                            Alumnas y alumnos que cursan la Educación Media Superior en instituciones públicas de modalidad escolarizada.
<br></br>
                            Registro:
                            Se realiza directamente en los planteles escolares, con personal acreditado y capacitado que realiza el padrón. La Coordinación Nacional informa a la escuela la fecha y el medio de entrega.
<br></br>
                            Monto y forma de pago:
                            Consta de 800 pesos mensuales entregados bimestralmente por becario (1,600 pesos bimestrales), durante los diez meses que dura el ciclo escolar.
<br></br>
                            Dependiendo de la localidad donde viva el o la becaria, puede ser mediante pago electrónico o en mesas de pago establecidas en localidades donde no hay bancos.
                        </Typography>

                    </CardBody>
                    <CardFooter>
                        <Button variant="contained" color="primary" size="large">
                            Activar Ficha
                        </Button>
                    </CardFooter>
                </Card>

            </div>

        </div >
    )
}

export default Main
