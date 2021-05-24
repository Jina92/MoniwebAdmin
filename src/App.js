//import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './routes/login';
import Logout from './routes/logout';
import AllCustomers from './components/AllCustomers';
import CustomerDetail from './components/CustomerDetail';
import Logs from './components/Logs';
// import Test from './test';


export default function App() {
  return (
    
    <Router>
      <div>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/customer" exact component={AllCustomers} />
            <Route path="/customer/:id" component={CustomerDetail} />
            <Route path="/logs" exact component={Logs} />
            {/* <Route path="/test" exact component={Test} /> */}
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}
