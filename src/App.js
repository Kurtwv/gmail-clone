import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Counter from './Counter';
import api from './api/posts';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './Email/Mail';
import EmailList from './Email/EmailList';

function App() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () =>{
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err){
        if(err.response){

        
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
      
    }else{
      console.log('Error: ${err.message}')
    }
  }
}
fetchPosts();  }, [])
useEffect(() => {
  const filteredResults = posts.filter((post) =>
    ((post.body).toLowerCase()).includes(search.toLowerCase())
    || ((post.title).toLowerCase()).includes(search.toLowerCase()));

  setSearchResults(filteredResults.reverse());
}, [posts, search])
  return (
    <Router>
    <div className="app">

      <Counter/>
      <Home posts={searchResults}/>
      <Header/>
        <div className="body">
        <Sidebar/>
        <Switch>
            <Route path="mail">
              <Mail/>
            </Route>
            <Route path="/">
              <EmailList/>
            </Route>
        </Switch>


        </div>
      
      
        </div>
     </Router>
      
     
  );
}

export default App;
