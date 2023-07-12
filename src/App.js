import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom'
import axios from 'axios';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []); 

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;