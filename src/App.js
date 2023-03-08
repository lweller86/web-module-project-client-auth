import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Components/login'
import AddFriend from './Components/AddFriends'
import FriendsList from './Components/FriendsList'






function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
          <Link className="link" to="login">LOGIN</Link> 
          <Link className="link"  to="friends">FRIENDLIST</Link>
          <Link className="link"  to="friends/add">ADDFRIEND</Link>
          <Link className="link"  to="friends">LOGOUT</Link>
        
      </header>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>

    </div>

  );
}

export default App;
