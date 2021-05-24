import React, {useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Nav from './nav';

const useStyles = makeStyles({
  title: { 
      textAlign: 'center',
      marginTop: '0.5em',
      marginBottom: '0.5em'
  },
  tableTitle: {
      background: 'lightgrey'
  }

});

export default function AllCustomers() {

    const classes = useStyles();
    const [customers, setCustomers] = useState([]);
    let history = useHistory();
    
    useEffect(() => {  // like document.onload() 
        FetchAll();
    }, [history]); //


  const FetchAll = () => {
        let url = 'http://localhost/proj2/admin/admin_api.php?action=displayall';
        fetch(url, {
        method: 'GET', 
        mode: 'cors',
        credentials: 'include' 
        }).then((response) => {
                console.log(response.status);
                if (response.status == 200) {

                    response.json().then(function(body) {
                        console.log(body);
                        setCustomers(body);
                    }).catch(error => console.log(error));
                }
                else {
                    console.log(response.status);
                    history.push("/login");
                }
        }).catch(error => {
            console.log(error); 
            history.push("/login"); // go to login page
        });
  }
  
  return (
    <div>
        <Nav />
        <Typography variant="h4" className={classes.title} >
            Customers
        </Typography>
        
        <TableContainer component={Paper}>
        {/* <Table className={classes.table} size="small" aria-label="a dense table"> */}
        <Table className={classes.table} size="small" aria-label="a dense table">
        
            <TableHead>
                <TableRow className={classes.tableTitle} >
                    <TableCell align="center"><Typography variant="subtitle1">ID</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Name</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Email</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Membership</Typography></TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            {customers.map((customer) => (
                <TableRow key={customer.customerid}>
                    <TableCell component="th" scope="row" align="center">
                        <Link to={`/customer/${customer.customerid}`}>  {customer.customerid} </Link> 
                    </TableCell>
                    <TableCell align="center">{customer.name}</TableCell>
                    <TableCell align="center">
                        <Link to={`/customer/${customer.customerid}`}>{customer.email}</Link>
                    </TableCell>
                    <TableCell align="center">{ customer.active==1 ? 'Active' : 'Cancelled'} </TableCell>
                </TableRow>
            ))}
            </TableBody>

        </Table>
        </TableContainer>
    </div>
  );
}
  
