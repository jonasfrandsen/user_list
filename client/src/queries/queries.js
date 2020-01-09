import { gql } from 'apollo-boost'

const getUsersQuery = gql`
{
  users {
    name
    email
    id
  }
}
`;

const getUserQuery = gql`
query ($id: ID!){
  user(id: $id) {
    id
  }
}
`;

const addUserMutation = gql`
mutation addUserToList($name: String!, $email: String!) {
  addUser(name: $name, email: $email) {
    name
    email
  }

}
`;

const deleteUserMutation = gql`
mutation deleteUserFromList($id: ID!) {
  deleteUser(id: $id) {
    id
  }
}
`;

export { getUsersQuery, addUserMutation, deleteUserMutation, getUserQuery };
