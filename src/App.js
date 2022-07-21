import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Post from './pages/post';
import Edit from './pages/edit';
import Feed from './pages/feed';
import List from './pages/list';

function App() {
  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<Feed/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/edit" element={<Edit/>} />
      <Route path="/list" element={<List/>} />
    </Routes>
  </Router>
  );
}

export default App;
