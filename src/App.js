import './App.css';
import TrackerForm from './Components/TrackerForm';
import TrackerList from './Components/TrackerList';
import Tracker from './Components/Tracker';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const [userToUpdate, setUserToUpdate]= useState({
    item: "",
    date: "",
    amount:"",
    category: "",
  })

  function addUser(user) {
    setUsers([...users, user]);
  }
  
  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }
  function updateUser(id, updateUserInfo) {
    let newUsers = users.map((user) => {
      if (user.id ===id) {
        return updateUserInfo;
      }
      return user;
    })

    setUsers(newUsers)


  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <TrackerForm />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <TrackerList />
            </div>

          </div>

        </div>

      </div>

    </div>
   
     
  );
}

export default App;
