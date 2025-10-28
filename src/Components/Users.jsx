import React, { use, useState } from "react";
const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  const [newlyAddedUser, setNewlyAddedUser] = useState(users)

  const handleAddUser = (e) => {
    e.preventDefault();
    const user = e.target.userName.value;
    const email = e.target.userEmail.value;
    // console.log(name, email);
    
    //* Send data to the server
    const newUsers = {user, email};
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUsers),
    })
      .then((response) => response.json())
      .then((data) => {
        const newusers = [...users, data];
        setNewlyAddedUser(newusers);
      });
  };

  return (
    <div>
      Users:{newlyAddedUser.length}
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="userName" required />
          <br />
          <input type="email" name="userEmail" required />
          <br />
          <button>Add User</button>
        </form>
      </div>
      <div className="grid-col-12">
        {newlyAddedUser.map(({ id, user, email }) => (
          <div key={id} className="grid-col-3">
            <h2>{user}</h2>
            <p>{email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
