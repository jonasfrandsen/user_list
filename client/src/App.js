import React, { useState } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

//styles
import './styles/global.css'

//components
import UserList from './components/userlist'
import AddUser from './components/adduser'
import RemoveUser from './components/removeuser'

//apollo client setup
const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_CLIENT_URI
});

function App() {


  //Denne hook deles mellem komponenterne RemoveUser og UserList
  //mhp. at lave en conditional i RemoveUser
  const [selected, setSelected] = useState([]);
  return (
    <ApolloProvider client={client}>
    <div>
    <AddUser />
    <br />
    <RemoveUser
      selected={selected}
      setSelected={setSelected} />
    <br />
    <h3>User list:</h3>
    <UserList
      selected={selected}
      setSelected={setSelected} />
    </div>
    </ApolloProvider>
  );
}

export default App;
