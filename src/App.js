import React from 'react';
import './CSS/App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Users />
      </div>
    </div>
  );
};

export default App;
