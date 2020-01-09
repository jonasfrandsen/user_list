import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getUsersQuery } from '../queries/queries'
import '../styles/global.css'

function UserList(props) {
  const { loading, error, data } = useQuery(getUsersQuery)

  if(loading) return 'Loading...';
  if(error) return `${error.message}`;

console.log(props.selected)
  //der mappes gennem listen af brugere fra databasen og hver enkelt returneres som et
  //list element
  return data.users.map(user => {
    return(
      <div id="user-list-container">
        <li key={user.id}>

          <div id="list-elements-container">
            <div>
            <input
              type="checkbox"
              name={user.name}
              id={user.id}
              onChange={(e) => e.target.checked === true ?
                props.setSelected([...props.selected, {id: user.id, name: user.name}])
                : props.setSelected([...props.selected.filter(v => v.name !== user.name)])}
               />
            </div>
            <div className="list-element">{user.name}</div>
            <div className="list-element">{user.email}</div>
            <div className="list-element">{user.id}</div>
          </div>

        </li>
      </div>
    )
  })
};

export default UserList;
