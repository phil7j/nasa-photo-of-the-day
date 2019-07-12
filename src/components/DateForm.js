
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormGroup';


export default function DateForm(props) {
  const classes = useStyles();
  const [date, setDate] = useState(props.data.date)

     const clearDate = ()=> {
        setDate(props.data.date);
        props.setDate('');
        }

    const dateHandler = (value)=> {
        const newDate = `&date=${value}`
        console.log(newDate);
        props.setDate(newDate);
        props.setData({});
    }
  return (
      <>
      {console.log(props.data.date)}
    <FormControl className={classes.form}>
        <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={props.data.date}
            // value={props.date}
            onChange={e => dateHandler(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
        <Button variant="contained" color="primary" onClick={clearDate} className={classes.button}>
        Back to Today
        </Button>
    </FormControl >
  </>
  );
}


const useStyles = makeStyles(theme => ({
    container: {
      width: '400px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
      color: 'white',
      background: 'white',
    },
    button: {
        margin: theme.spacing(1),
        width: '150px',
        color: 'white',

      },
    form: {
        flexGrow: '1',
        display: 'flex',
    }

  }));
