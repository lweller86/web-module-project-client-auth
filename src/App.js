import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/login'
import AddFriend from './Components/AddFriends'
import FriendsList from './Components/FriendsList'






function App() {
  return (



    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />}/>
        <Route path="/friends/add" element={<AddFriend />}/>
      </Routes>

    </div>

  );
}

export default App;
