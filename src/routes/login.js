import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik';



const useStyles = makeStyles((theme) => ({
  paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.info.main,
  },
  form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
}));

const validate = values => {
    
    const errors = {};
    if (!values.email) {
        errors.email = "Required"; 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Should be at least 8 characters";
    }

    return errors;
  } 




export default function Login() {

  const classes = useStyles();
  let history = useHistory();

  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
        loginFetch(values); 
      },
  });
  
  
  const loginFetch = (values) => {
    var formD = new FormData(); 

    // FormData lets you compile a set of key/value pairs to send using XMLHttpRequest
    // A network methods, such as fetch, can accept a FormData object as a body
    // It’s encoded and sent out with 
    formD.append('email', values.email);
    formD.append('password', values.password); 

    let url = 'http://localhost/proj2/admin/admin_api.php?action=login';
    fetch(url, {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      mode: 'cors',
      credentials: "include",
      body: formD
    }).then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        response.json().then(function(body) {
          console.log(body.firstname+" "+body.lastname);
          console.log(body.email);

          localStorage.setItem('firstname', body.firstname);
          localStorage.setItem('lastname', body.lastname);
          localStorage.setItem('email', body.email);

          history.push("/customer");
        }).catch(error => console.log(error));
      }
    }).catch(error => console.log(error));
  }
  
    return (
    
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Administraion Sign in 
            </Typography>
            {/* <form className={classes.form} onSubmit={e => { handleSubmit(e) }}> */}
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                {formik.touched.email && formik.errors.email ? ( 
                    <div id="msg1">{formik.errors.email}</div> ) : null}  
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    // required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? ( 
                    <div id="msg2">{formik.errors.password}</div> ) : null}  
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit} >
                    Sign In
                </Button>
            </form>
            </div>
        </Container>
    
    );
}
  
