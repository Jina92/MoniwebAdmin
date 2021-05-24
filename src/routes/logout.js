import React, {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

export default function Logout() {

  const [customers, setCustomers] = useState([]);
  let history = useHistory();
  
  useEffect(() => {  //like document.onload() 
    fetchLogout();
  }, []); //


  const fetchLogout = () => {
        let url = 'http://localhost/proj2/admin/admin_api.php?action=logout';
        fetch(url, {
            method: 'GET', 
            mode: 'cors',
            credentials: 'include' 
        }).then((response) => {
                console.log(response.status);
                if (response.status == 200) {
                    response.json().then(function(body) {
                        console.log(response.status+':'+body);
                        history.push("/login");
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
        <h2>Logged Out </h2>
    </div>
  );
}
  
