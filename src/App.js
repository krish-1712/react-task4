
import { useState } from 'react';
import { Redirect, Route ,Switch } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { Nopage } from './Components/NoPage';
import UserComponents from './Components/UserComponents';
import { UserDetails } from './Components/UserDetails';
import { data } from './Data/data';

function App() {

  const [user, setUser]= useState(data);
  
  return (
    <div className="App">
      <Switch>
         <Route exact path="/">
         <UserComponents 
         user={user}
         setUser={setUser}/>
         </Route>

         <Route path="/add/user">
          <AddUser
            user={user}
            setUser={setUser}/>
         </Route>
         <Route path="/edit/:id">
          <EditUser
           user={user}
           setUser={setUser}/>
         </Route>
         <Route  path="/user/:id">
            <UserDetails user={user}/>
          </Route>
          <Route path="/students">
              <Redirect exact path='/'/>
          </Route>

          <Route  path="**">
              <Nopage/>
          </Route>

      </Switch>
   
    </div>
  );
}

export default App;
