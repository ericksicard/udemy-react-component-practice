import {useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {

  const [userList, setUserList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUserList( prevState => {
      return [...prevState ,{name: userName, age: userAge, id: Math.random().toString()}];
  })};

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
