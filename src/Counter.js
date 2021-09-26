import React, {useEffect, useState } from 'react'

//import axios from "axios"
//const [posts, setPosts] = useState=([]);
const axios = require('axios').default;

// const api = axios.create({
    
//     baseURL: 'https://randomuser.me/api'
// })
const fetchRandomData=()=> {
    
    // return axios.get('https://randomuser.me/api')
    // .then(({data}) => {
    // console.log(data);
    // return JSON.stringify(data);
    // })
    // .catch(error => {
    // console.log(error);
    // }) ;
  
    axios.get('https://randomuser.me/api')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
}



function Counter(){
    const [randomData, setRandomData] = useState('');
    //fetchRandomData().then(randomData =>{
    //    setRandomData(randomData);
  //  })
    return(
        <>
        
        <button onClick={() =>{fetchRandomData()}}>Fetch Random Data</button>
        <button onClick={() =>{test()}}>Display Data</button>
        <p>{randomData}</p>
        </>
    )
}

const test=() =>{
    <p>hi</p>
    
    
}  


//https://randomuser.me/api
export default Counter
