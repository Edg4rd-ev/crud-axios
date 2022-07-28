import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Post from './pages/Post/post';
import Edit from './pages/Edit/edit';
import TeacherList from './pages/Teacher/teacher_list';

function App() {
  return(
  <Router>
    <Routes>
      <Route exact path="/" element={<TeacherList/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/edit/:id" element={<Edit/>} />
    </Routes>
  </Router>
  );
}

export default App;
