import React from "react";
import {Link} from 'react-router-dom';

export default function Nav() {
    return (

    <nav>
          <ul>

          <li>
              <Link to="/customer">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/customer">All Customers</Link>
            </li>
            <li>
              <Link to="/logs">Status Logs</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
    );
}

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function ItemNew1() {
  return (
    <div>AAAA</div>
  );
}

function ItemNew2() {
  return (
    <div>BBBBB</div>
  );
}

function ItemNew3() {
  return (
    <div>CCCCC</div>
  );
}

function TabPanel(props) {
  const { children, value, index} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={index} >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}

    </div>
  );
}




export default function SimpleTabs() {
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
        <ItemNew1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
        <ItemNew2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
        <ItemNew3 />
      </TabPanel>
    </div>
  );
}
