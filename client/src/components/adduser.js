import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'
import { addUserMutation, getUsersQuery } from '../queries/queries'

function AddUser() {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [addUserToList] = useMutation(addUserMutation);

  return(
    <form id="add-user" onSubmit={e => {
      addUserToList({ variables: {
        name: userName,
        email: userEmail
      },
      refetchQueries: [{ query: getUsersQuery }],
    });
    }}>
      <h2>Add user:</h2>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Full Name"
          onFocus={e => e.target.placeholder = ""}
          onBlur={e => e.target.placeholder = "Full Name"}
          onChange={e => setUserName(e.target.value)} />
      </div>

      <div className="input-container">
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          onFocus={e => e.target.placeholder = ""}
          onBlur={e => e.target.placeholder = "Email"}
          onChange={e => setUserEmail(e.target.value)} />
      </div>

      <button id="add-user-button">Add</button>

    </form>
  )
}

export default AddUser;
