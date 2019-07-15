import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DateForm from './DateForm'

function Header(props) {
    const classes = useStyles();

    return (



         <div className={classes.root}>
         <AppBar position="fixed" color="default" className={classes.appbar}>
           <Toolbar>
             <Typography variant="h4" color="inherit" className={classes.title}>
                NASA
             </Typography>
             <DateForm date={props.date} setDate={props.setDate} setData={props.setData} data={props.data}/>
           </Toolbar>
         </AppBar>
       </div>
    )
}

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    appbar: {
        background: 'white',
        color: 'black',
        display: 'flex',
    }
  });

export default Header
