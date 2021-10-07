import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './Components/Email/Mail';
import EmailList from './Components/Email/EmailList';
import SendMail from './Components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { auth } from './firebase';

function App() {
  const [emails, setEmails] = useState([]);
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //Stay signed in when refresh page
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
          dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }))
      }else{

      }
    })
  },[]);
  

const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
        <Router>
          {!user ?(
            <Login/>):(
                <div className="app">
          <Header input={input} setInput={setInput}/>
                <div className="body">
            <Sidebar/>
            <Switch>
                <Route path="/mail">
                  <Mail/>
                </Route>
                <Route path="/">
                  <EmailList emails={emails} setEmails={setEmails} input={input} setInput={setInput}/>
                </Route>
            </Switch>


        </div>
        {sendMessageIsOpen && <SendMail/>}
      
        </div>
     
        )
      } 
    
      
    </Router>   
  );
}

export default App;
