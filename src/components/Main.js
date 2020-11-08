import React from 'react'
import {
    makeStyles, Typography, Hidden
} from '@material-ui/core'
import { FullscreenExit } from '@material-ui/icons'
import NavBar from './NavBar'
import SideBar from './SideBar'



const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
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
                <pre>vedbhjnksmldnedbewvduegd
                qdyqdvyhqd

                </pre>
            </div>

        </div>
    )
}

export default Main
