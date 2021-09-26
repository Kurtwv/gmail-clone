import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Counter from './Counter';
import api from './api/posts';
import Home from './Home';

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
    <div className="app">

      <Counter/>
      <Home posts={searchResults}/>
      <Header>
      <h2>Hi</h2>
      </Header>
      <Sidebar/>
      
      </div>
  );
}

export default App;
