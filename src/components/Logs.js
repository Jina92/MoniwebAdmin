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
import Nav from './nav';

const useStyles = makeStyles({
    title: { 
        textAlign: 'center',
        marginTop: '0.5em'
    },
    subtitle: { 
        textAlign: 'center'
    },
    tableTitle: {
        background: 'lightgrey'
    }
  
  });
  
export default function Logs() {

    const classes = useStyles();
    const [logs, setLogs] = useState([]);
    let history = useHistory();
    
    useEffect(() => {  //like document.onload() 
        FetchAll();
    }, []); //


  const FetchAll = () => {
        let url = 'http://localhost/proj2/admin/admin_api.php?action=logs';
        fetch(url, {
        method: 'GET', 
        mode: 'cors',
        credentials: 'include' 
        }).then((response) => {
                console.log(response.status);
                if (response.status == 200) {

                    // console.log(response.json());
                    response.json().then(function(body) {
                        console.log(body);
                        setLogs(body);
                    //   console.log(body.firstname+" "+body.lastname);
                    //   console.log(body.email);
                    //   localStorage.setItem('firstname', body.firstname);
                    //   localStorage.setItem('firstname', body.lastname);
                    //   localStorage.setItem('email', body.email);
                    }).catch(error => console.log(error));
                }
                else {
                    console.log(response.status);
                    history.push("/customer");
                }
        }).catch(error => {
            console.log(error); 
            history.push("/customer"); // go to login page
        });
  }
  
  return (
    <div>
        <Nav /> 
        <Typography variant="h4" className={classes.title} >
            Recent Status Logs
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
            (Recent 50 logs are displayed)
        </Typography>

        <TableContainer component={Paper}>
        {/* <Table className={classes.table} size="small" aria-label="a dense table"> */}
        <Table className={classes.table} size="small" aria-label="a dense table">
        
            <TableHead>
                <TableRow className={classes.tableTitle} >
                    <TableCell align="center"><Typography variant="subtitle1">Log ID</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Client IP</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Session ID</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">User Name</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Plan Type</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Action</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Response Code</Typography></TableCell>
                    <TableCell align="center"><Typography variant="subtitle1">Time</Typography></TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>

            {logs.map((log) => (
                <TableRow key={log.logid}>
                    <TableCell component="th" scope="row" align="center">{log.logid} </TableCell>
                    <TableCell align="center">{log.clientip}</TableCell>
                    <TableCell align="left">{log.sessionid} </TableCell>
                    <TableCell align="left">{log.username}</TableCell>
                    <TableCell align="center">{log.plantype}</TableCell>
                    <TableCell align="center">{log.action}</TableCell>
                    <TableCell align="center">{log.responsecode}</TableCell>
                    <TableCell align="center">{log.logtime}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}

  
