import React, {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Nav from './nav';

const useStyles = makeStyles({
    table: {
        maxWidth: 400,
        minWidth: 300
    },
    title: { 
        textAlign: 'center',
        marginTop: '0.5em',
        marginBottom: '0.5em'
    },
    tableTitle: {
        background: 'lightgrey'
    }
  });

export default function CustomerDetail(match) {

    const classes = useStyles();
    const [customer, setCustomer] = useState({});
    let history = useHistory();

    useEffect(() => {  //like document.onload() 
        FetchCustomer();
        //console.log(`params.id:${match}`);
        // console.log("=========================");
        // console.log(match.match.params.id);
        // console.log("+++++++++++++++++++++++++");
        
    }, [history]);

    const FetchCustomer = () => {
        let url = `http://localhost/proj2/admin/admin_api.php?action=displaycustomer&customerid=${match.match.params.id}`;
        fetch(url, {
            method: 'GET', 
            //mode: 'cors',
            credentials: 'include'
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {

                // console.log(response.json());
                response.json().then(function(body) {
                    //console.log("=========================");
                    //console.log(body);
                    setCustomer(body);
                //   console.log(body.firstname+" "+body.lastname);
                //   console.log(body.email);
                //   localStorage.setItem('firstname', body.firstname);
                //   localStorage.setItem('firstname', body.lastname);
                //   localStorage.setItem('email', body.email);
                }).catch(error => console.log(error));
            }
        }).catch(error => {
            console.log(error); 
           // history.push("/login"); // go to login page
        });
    }

    const handleCancel = () => {

        if (customer.active == 0 ) {// Cancelled  
            alert("Already cancelled");
            return;
        }

        let url = `http://localhost/PROJ2/admin/admin_api.php?action=cancel&customerid=${match.match.params.id}`;
        fetch(url, {
            method: 'GET', 
            mode: 'cors',
            credentials: 'include'
        }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
                // console.log(response.json());
                response.json().then(function(body) {
                    alert("Membership Cancelled");
                    history.push("/customer");
                }).catch(error => console.log(error));
            }
        }).catch(error => {
            console.log(error); 
            history.push("/customer"); // go to main page: display all customers 
        });
    }

    // const handleGoHome = () => {
    //     history.push("/customer");
    // }

    return (
        <div>
            <Nav /> 
            <Typography variant="h4" className={classes.title} >
                Customer Details
            </Typography>

            <TableContainer component={Paper} align="center">
            {/* <Table className={classes.table} size="small" aria-label="a dense table"> */}
            <Table className={classes.table} size="small" aria-label="a dense table">
            
                {/* <TableHead>
                    <TableRow className={classes.tableTitle} >
                        <TableCell align="center"><Typography variant="subtitle1">ID</Typography></TableCell>
                        <TableCell align="center"><Typography variant="subtitle1">Name</Typography></TableCell>
                        <TableCell align="center"><Typography variant="subtitle1">Email</Typography></TableCell>
                        <TableCell align="center"><Typography variant="subtitle1">Membership</Typography></TableCell>
                    </TableRow>
                </TableHead> */}
                
                <TableBody>
                    <TableRow>
                        <TableCell align="right"><Typography variant="subtitle1"> Customer id </Typography></TableCell>
                        <TableCell align="left">{customer.customerid}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right"> <Typography variant="subtitle1"> Name </Typography></TableCell>
                        <TableCell align="left">{customer.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right"><Typography variant="subtitle1">Email</Typography></TableCell>
                        <TableCell align="left">{customer.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right"><Typography variant="subtitle1">Address</Typography></TableCell>
                        <TableCell align="left">{customer.address}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right"><Typography variant="subtitle1">Register Date</Typography></TableCell>
                        <TableCell align="left">{customer.registerdate}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right"><Typography variant="subtitle1">Membership</Typography></TableCell>
                        <TableCell align="left">{customer.active == 1 ? 'ACTIVE' : 'CANCELLED'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right"><Typography variant="subtitle1">Cancel Date</Typography></TableCell>
                        <TableCell align="left">{customer.canceldate}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Button  variant="contained" onClick={handleCancel}> Cancel  Membership Plan</Button>
            </TableContainer>
            
        </div>
    );
}
  
