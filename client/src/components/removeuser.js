import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks'
import { deleteUserMutation, getUsersQuery } from '../queries/queries'
import '../styles/global.css'


function RemoveUser(props) {
  const { error } = useQuery(getUsersQuery);
  const [deleteUserFromList] = useMutation(deleteUserMutation)

  if(error) return `${error.message}`;
  if(props.selected.length > 0) {
      return (
        <div>
          <p style={{color: "red"}}>Are you sure you want to remove user {props.selected.map(e => <li>{e.name}</li>)} from the list?</p>
          <button
            id="remove-user-button"
            onClick={() => props.selected.forEach(e => {
              deleteUserFromList({ variables: {
                id: e.id
              },
              refetchQueries: [{ query: getUsersQuery }],
            });
            props.setSelected([])
          })
          }>Remove</button>
          </div>
        )
      } else if(props.selected.length === 0) {
        return (
          <div>
          </div>
    )
  }
  };

export default RemoveUser;
