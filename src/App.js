import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import dashboard from './Pages/dashboard';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


 function App() {
  return (
    <BrowserRouter>
    <Switch>
       <ProtectedRoute  exact path="/" component={dashboard} />
       <Route   path="/Login" component={Login} />
       <Route   path="/SignUp" component={SignUp} />

    </Switch>
   </BrowserRouter>
  )
}
export default App;
