import React from 'react'
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core'
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
import EmailSharpIcon from '@material-ui/icons/EmailSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';


const ListaDep = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <HomeSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SchoolSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contro Escolar" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LocalHospitalSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atención Psicológica" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MonetizationOnSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recursos Financieros" />
                </ListItem>
                <Divider></Divider>
                <ListItem button>
                    <ListItemIcon>
                        <EmailSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Buzón de mensajes" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mi Cuenta" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>

            </List>
        </div>
    )
}

export default ListaDep
