import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth, provider } from '../../firebase';
import { getAuth, signInAnonymously } from "firebase/auth";

import './Login.css';
function Login() {

    const dispatch = useDispatch();

    // Login with popup, provider = googleAuthProvier //
    // Dispatch info to userSlice as a payload        //
    // Demo login option, sign in anonymously         //

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }

    const signInDemo = () =>{
        const auth = getAuth();
        signInAnonymously(auth).then(() => {
            
            })
            .catch(error => alert(error.message))
        
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
                <Button variant="contained" color="primary" onClick={signInDemo}>Demo Sign in</Button>
            </div>
        </div>
    )
}

export default Login
