import React from 'react';
import Users from './Components/Users';

const usersPromise = fetch("http://localhost:3000/users").then(response => response.json())

const App = () => {
  return (
    <div>
      <h1>User Management System</h1>
      <Users usersPromise={usersPromise}></Users>
    </div>
  );
};

export default App;