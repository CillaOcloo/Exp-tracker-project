import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import dashboard from './Pages/dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

 function App() {
  return (
    <BrowserRouter>
    <Switch>
       <Route  exact path="/" component={dashboard} />
       <Route   path="/Login" component={Login} />
       <Route   path="/SignUp" component={SignUp} />

    </Switch>
   </BrowserRouter>
  )
}
export default App;
