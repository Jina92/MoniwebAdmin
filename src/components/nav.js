import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: { 
        height: '5em',
        background: 'lightgrey'
    },
    anchor: {
        background: 'black',
        border: 0,
        borderRadius: 5,
        boxShadow: '0 3px 5px 2px grey',
        color: 'white',
        height: 30,
        padding: '0 30px', 
        margin: '0 1em'
    },
    griditem: {
        textAlign: 'center',
        marginTop: '1.5em'
        
    }
});

// export default function CenteredGrid() {
export default function Nav() {

    const classes = useStyles();

    return (
        <Container className={classes.root + " "} >
        {/* <Grid container spacing={3}  */}
        <Grid container >
            {/* <Grid item xs={3} sm={3} md={3} className={classes.griditem}> 
                <Link to="/customer"  style={{ textDecoration: 'none' }} >
                    <Typography  variant="h6" className={classes.anchor}>
                        Home 
                    </Typography>
                </Link>
            </Grid> */}
            <Grid item xs={4} sm={4} md={4} className={classes.griditem}> 
                <Link to="/customer" style={{ textDecoration: 'none' }} >
                    <Typography variant="h6" className={classes.anchor}>
                        All Customers 
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={4} sm={4} md={4} className={classes.griditem}> 
                <Link to="/logs" style={{ textDecoration: 'none' }} >
                    <Typography variant="h6" className={classes.anchor}>
                        Logs 
                    </Typography>
                </Link>
            </Grid>

            <Grid item xs={4} sm={4} md={4} className={classes.griditem}> 
                <Link to="/logout" style={{ textDecoration: 'none' }} >
                    <Typography  variant="h6" className={classes.anchor}>
                        Logout 
                    </Typography>
                </Link>
            </Grid>
        </Grid>
        </Container>
    );
}



// export default function Nav() {
//     return (

    //   <AppBar position="static">
    //   <Tabs value={value} onChange={handleChange}>
    //     <Tab label="Home" />
    //     <Tab label="Login" />
    //     <Tab label="All Customers Three"  />
    //   </Tabs>
    // </AppBar>

    // <nav>
    //       <ul>

    //       <li>
    //           <Link to="/customer">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/login">Login</Link>
    //         </li>
    //         <li>
    //           <Link to="/test">Test</Link>
    //         </li>
    //         <li>
    //           <Link to="/customer">All Customers</Link>
    //         </li>
    //         <li>
    //           <Link to="/logs">Status Logs</Link>
    //         </li>
    //         <li>
    //           <Link to="/logout">Logout</Link>
    //         </li>
    //       </ul>
    //     </nav>
//     );
// }